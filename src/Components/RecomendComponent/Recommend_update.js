import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import { BsTrash3 } from "react-icons/bs";
import RadioButton from "../../Components/RecomendComponent/RadioButton";
import "../../Styles/BoardWrite.css";
import "../../Styles/RecomendStyle.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Recommend_update = () => {
  const location = useLocation();
  const boardid = location.state.boardid;

  const [boardData, setBoardData] = useState({
    title: "",
    email: "",
    aurthorprofile: "",
    authornickname: "",
    createdat: "",
    content: "",
    recommends: "",
    likes: "",
  });

  const [boardImgs, setBoardImgs] = useState([]);
  const [travelData, setTravelData] = useState(null);

  const [placeCategory, setPlaceCategory] = useState("");
  const [petProvisionsData, setPetProvisionsData] = useState([]);

  const [placeOption, setPlaceOption] = useState(placeCategory);

  const options = [
    { value: "RESTAURANT", label: "#식당" },
    { value: "CAFE", label: "#카페" },
    { value: "PARK", label: "#공원" },
    { value: "ACCOMMODATION", label: "#숙소" },
  ];

  const handleOptionChange = (newValue) => {
    setPlaceOption(newValue);
  };

  useEffect(() => {
    const getImgInfo = () => {
      axios
        .post("http://localhost:8080/board/detailimg", {
          post: { id: boardid },
        })
        .then((res) => {
          setBoardImgs(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const getBoardInfo = () => {
      axios
        .post("http://localhost:8080/board/detail", {
          id: boardid,
          category: "TRAVEL",
        })
        .then((res) => {
          getTravelInfo(res.data.id);
          setBoardData({
            title: res.data.title,
            email: res.data.author.email,
            aurthorprofile: res.data.author.profileImage,
            authornickname: res.data.author.nickname,
            createdat: res.data.createdAt,
            content: res.data.content,
            recommends: res.data.recommends,
            likes: res.data.likes,
          });
          setWriteContentText(res.data.content.length);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .then(getImgInfo());
    };

    const getTravelInfo = (boardid) => {
      axios
        .post("http://localhost:8080/travel/getinfo", { post: { id: boardid } })
        .then((res) => {
          setPlaceCategory(res.data.category);
          setPetProvisionsData(res.data.petProvisions);

          if (res.data.category === "RESTAURANT") {
            const defaultOption = options[0];
            setPlaceOption(defaultOption);
          } else if (res.data.category === "CAFE") {
            const defaultOption = options[1];
            setPlaceOption(defaultOption);
          } else if (res.data.category === "PARK") {
            const defaultOption = options[2];
            setPlaceOption(defaultOption);
          } else if (res.data.category === "ACCOMMODATION") {
            const defaultOption = options[3];
            setPlaceOption(defaultOption);
          }

          handleOptionChange(res.data.category);
          setCheckboxes(res.data.petProvisions);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getBoardInfo();
    getTravelInfo(boardid);
  }, [setBoardData]);

  const [selectedFiles, setSelectedFiles] = useState([]);

  let fileList = []; // 업로드 할 파일 리스트 저장

  const handleFileInputChange = (event) => {
    const uploadFiles = Array.prototype.slice.call(event.target.files); // 파일 이름을 배열 형태로 저장
    console.log("uploadFiles => " + uploadFiles);

    // 파일 이름을 하나씩 저장
    uploadFiles.forEach((uploadFile) => {
      console.log(uploadFile);
      fileList.push(uploadFile);
    });

    setSelectedFiles([...selectedFiles, ...event.target.files]);
  };

  // ===========================================================================================================

  //const [boardImgs, setBoardImgs] = useState([]);
  // {boardImgs !== null ? (
  //   <>
  //     {boardImgs.map((img) => {
  //       return (
  //         <>
  //           <img
  //             className="RecomendDetailImg"
  //             src={imagePath + img.imageUrl}
  //             alt="fasd"
  //           />
  //         </>
  //       );
  //     })}
  //   </>
  // ) : null}
  // ===========================================================================================================

  const handleRemoveImage = (index) => {
    const newFiles = [...selectedFiles];
    newFiles.splice(index, 1);
    setSelectedFiles(newFiles);
  };

  const handleUploadClick = () => {
    checkBoard();
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  const inputRef = useRef(null);
  const writeTitleText = useRef(null);
  const writeContentTextArea = useRef(null);
  const [writeContentText, setWriteContentText] = useState(0); //글자수
  const [checkboxes, setCheckboxes] = useState([]);

  const handleWriteTitleText = (event) => {
    setBoardData((data) => ({
      ...data,
      title: event.target.value,
    }));
  };

  const handleContentTextArea = (event) => {
    if (event && event.target) {
      setBoardData((data) => ({
        ...data,
        content: event.target.value,
      }));
    }
  };

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;

    if (checked) {
      setCheckboxes((prevCheckboxes) => [...prevCheckboxes, id]);
    } else {
      setCheckboxes((prevCheckboxes) =>
        prevCheckboxes.filter((checkbox) => checkbox !== id)
      );
    }
  };

  const checkBoard = () => {
    if (
      writeTitleText.current.value.length <= 0 ||
      writeContentTextArea.current.value.length <= 0 ||
      placeOption === "" ||
      checkboxes.length <= 0 ||
      selectedFiles.length <= 0
    ) {
      alert("모든 항목을 작성해 주세요.");
    } else {
      submitTravelRecommend();
    }
  };

  const navigate = useNavigate();

  //const [boardid, setBoardid] = useState();

  const submitTravelRecommend = () => {
    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append("uploadfiles", file);
    });

    axios
      .post("http://localhost:8080/board/update", {
        author: { email: sessionStorage.getItem("email") },
        title: writeTitleText.current.value,
        content: writeContentTextArea.current.value,
        // thumbnailImage: selectedFiles[0].name,
        category: "TRAVEL",
      })
      .then((res) => {
        submitTravelInfo(res.data);
      })
      .catch((e) => {
        console.error(e);
      })
      .then(() => {
        axios
          .post("http://localhost:8080/board/uploadfiles", formData)
          .then((res) => {
            navigate("/routetrip");
          })
          .catch((e) => {
            console.error(e);
          });
      })
      .then(() => {
        navigate("/routetrip");
      });
  };

  const submitTravelInfo = (boardid) => {
    axios
      .post("http://localhost:8080/travel/writeinfo", {
        post: { id: boardid },
        placeName: "장소이름 지정 기능 아직 없음",
        category: placeOption,
        petProvisions: JSON.stringify(checkboxes),
      })
      .then((res) => {})
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <>
      <div className="writeForm">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label></Form.Label>
            <Form.Control
              className="writeTitle"
              type="email"
              placeholder="수정할 글 제목을 입력하세요"
              ref={writeTitleText}
              maxLength={255}
              value={boardData.title !== "" ? boardData.title : null}
              onChange={handleWriteTitleText}
            />
          </Form.Group>
          <Form.Group className="mb-3 writeFormContent">
            <Form.Label></Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="수정할 글 내용을 입력하세요"
              className="contentForm"
              ref={writeContentTextArea}
              maxLength={3000}
              value={boardData.content !== "" ? boardData.content : null}
              onChange={(event) => {
                setWriteContentText(writeContentTextArea.current.value.length);
                handleContentTextArea(event);
              }}
            />
          </Form.Group>
          <p className="writeContentTextP">
            {writeContentText !== null || writeContentText !== undefined
              ? writeContentText
              : 0}
            /3000
          </p>

          <div>
            <p className="recomendP" style={{ marginTop: "15px" }}>
              1. 장소를 변경하시려면 선택해 주세요 <br />
              <span className="recommendUpdatePlaceSpan">
                &nbsp;&nbsp;&nbsp;&nbsp;기존 선택 장소 -{" "}
                {placeCategory === "CAFE"
                  ? "카페"
                  : placeCategory === "RESTAURANT"
                  ? "식당"
                  : placeCategory === "PARK"
                  ? "공원"
                  : placeCategory === "ACCOMMODATION"
                  ? "숙소"
                  : null}
              </span>
            </p>
            <div className="radioBtnDiv">
              <RadioButton options={options} clickPlace={handleOptionChange} />
              {/* <p>{placeOption}</p> */}
            </div>
          </div>

          <p className="recomendP">2. 반려견 동반시 유의사항 </p>
          <div className="recomendCheckDiv">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="PET_SUPPLIES_PROVIDED"
                // id="flexCheckDefault"
                checked={checkboxes.includes("PET_SUPPLIES_PROVIDED")}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                펫 방석 혹은 담요를 제공해요
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="PET_SNACK"
                checked={checkboxes.includes("PET_SNACK")}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                펫 간식을 제공해요
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="PET_MANNER_BELT"
                checked={checkboxes.includes("PET_MANNER_BELT")}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                매너벨트 착용 필수에요
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="NO_LARGE_DOG_ALLOWED"
                checked={checkboxes.includes("NO_LARGE_DOG_ALLOWED")}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                15 kg 이상 대형견은 입장할 수 없어요
              </label>
            </div>
          </div>
        </Form>
      </div>

      <div>
        <div>
          <div className="uploadBtn">
            <Button
              variant="outline-secondary"
              className=""
              onClick={handleClick}
            >
              <img className="uploadBtnImg" src="img/uploading.png" alt="" />
            </Button>
          </div>

          <input
            className="uploadInput"
            type="file"
            multiple
            onChange={handleFileInputChange}
            ref={inputRef}
          />
        </div>

        <div className="uploadImgDiv">
          <ListGroup>
            {selectedFiles.map((file, index) => (
              <ListGroup.Item className="listGroupItem" id="listGroupItemId">
                <div key={index}>
                  <img
                    className="uploadImg"
                    src={URL.createObjectURL(file)}
                    alt={`${file.name}`}
                  />
                  <p className="imgTitle">{file.name}</p>
                  <div className="imgDeleteBtnDiv">
                    <button
                      className="imgDeleteBtn"
                      onClick={() => handleRemoveImage(index)}
                    >
                      <BsTrash3 />
                    </button>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <div className="btns">
          <button
            className="btn btn-sm btn-outline-primary submit"
            onClick={handleUploadClick}
          >
            수정 완료
          </button>
          <Link to="/routetrip">
            <button
              type="button"
              className="btn btn-sm btn-outline-primary boardListBtn"
            >
              글목록
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Recommend_update;
