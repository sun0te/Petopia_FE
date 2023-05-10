import React, { useState, useEffect } from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import BgLeft from "../Components/BgLeft.js";
import "../Styles/AdminUserList.css";

const AdminUserList = () => {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "홍길동",
      email: "test1@gmail.com",
      joinDate: "2022-05-01",
      memo: "첫 번째 회원",
    },
    {
      id: 2,
      name: "김기자",
      email: "test2@gmail.com",
      joinDate: "2022-04-15",
      memo: "",
    },
    {
      id: 3,
      name: "블랙리스트",
      email: "black@gmail.com",
      joinDate: "2022-03-10",
      memo: "다수 신고받은 회원",
    },
  ]);

  const [selected, setSelected] = useState([]);

  //체크박스 삭제, 취소
  const handleCheckboxChange = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const handleDeleteClick = () => {
    setMembers(members.filter((member) => !selected.includes(member.id)));
    setSelected([]);
  };

  const handleCancelClick = () => {
    setSelected([]);
  };

  return (
    <>
      <BgLeft />

      <main>
        <Header />
        <section className="user-mypagelist">
          <div className="userlist-title">
            <h3>회원 리스트</h3>
          </div>
          <div className="member-list-container">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>num</th>
                  <th>이름</th>
                  <th>이메일</th>
                  <th>가입일</th>
                  <th>기타</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member) => (
                  <tr key={member.id}>
                    <td>
                      <input
                        type="checkbox"
                        checked={selected.includes(member.id)}
                        onChange={() => handleCheckboxChange(member.id)}
                      />
                    </td>
                    <td>{member.id}</td>
                    <td>{member.name}</td>
                    <td>{member.email}</td>
                    <td>{member.joinDate}</td>
                    <td>
                      <textarea
                        value={member.memo}
                        onChange={(e) =>
                          setMembers(
                            members.map((m) =>
                              m.id === member.id
                                ? { ...m, memo: e.target.value }
                                : m
                            )
                          )
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="list-button">
            {selected.length > 0 && (
              <div className="member-list-actions">
                <button onClick={handleDeleteClick}>삭제</button>
                <button onClick={handleCancelClick}>취소</button>
              </div>
            )}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default AdminUserList;
