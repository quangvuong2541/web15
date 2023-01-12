import React, { Component } from 'react'
import img1 from "../asset/1.webp"
import img2 from "../asset/2.jpeg"
import img3 from "../asset/3.jpeg"
import img4 from "../asset/4.png"
import Child from './child'
export default class Index extends Component {
    listArray = {
        mangSP: [
            { maSP: 1, tenSP: "IphoneX", gia: 100, hinhAnh: img1 },
            { maSP: 2, tenSP: "IphoneXs", gia: 100, hinhAnh: img2 },
            { maSP: 3, tenSP: "Iphone11", gia: 100, hinhAnh: img3 },
            { maSP: 4, tenSP: "Iphone12", gia: 100, hinhAnh: img4 },
        ]
    }
    // truyền dữ liệu từ component cha sang dữ liệu component con 
    render() {
        return (
            <div>
                {/*  <TenComPonent tênbiếnTựĐặt = {giá trị cần truyền} */}
                <Child demo={this.listArray} />
            </div>
        )
    }
}
