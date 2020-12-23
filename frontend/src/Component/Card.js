import React from 'react';
import { Card } from 'antd';


const { Meta } = Card;



export default function RecipeReviewCard() {

 
  return (
    <Card
    hoverable
    style={{ width: 350,borderRadius : "5",border :"solid 1px",margin : 30,marginTop : 90 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  );
}
