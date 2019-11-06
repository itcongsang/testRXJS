import React, { useEffect, useState } from 'react';
import Layout from 'components/global/layout';
import './styles.scss';
import {getData} from '../../rxServices/rxPost';

export const Home = () => {

  const [listString, setList] = useState([]);
  useEffect(()=>{
    getData().subscribe({
      next: val=>{
        setList(val);
      },
      error:err=>console.log("Lỗi: "+err),
      complete:()=>console.log("complete"),
    });
  },[]);

  
  return (
    <Layout title="Dashbord" description="This is the home page">
    <p className="home-page">This is is the home page</p>
    {listString.map((t,i)=>{
      return (
        <div key={i}>
            <div>{t.name}</div>
            <div>{t.reader}</div>
        </div>
      )
    })}
  </Layout>
  );
}
  
;

export default Home;
