import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import BgLeft from "../Components/BgLeft.js";

const AdminUserList = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
      async function getUsers() {
        const response = await axios.get("http://localhost:5000/users");
        setUsers(response.data);
      }
      getUsers();
    }, []);

  return (
    <>
      <BgLeft />

      <main>
        <Header />
        <section className="user-mypage">
          <div>
            <h1>회원 리스트</h1>
            <table>
              <thead>
                <tr>
                  <th>이메일</th>
                  <th>비밀번호</th>
                  <th>이름</th>
                  <th>닉네임</th>
                  <th>생일</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.email}>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.name}</td>
                    <td>{user.nickname}</td>
                    <td>{user.birthday}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default AdminUserList;
