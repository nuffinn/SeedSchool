import React from "react";
import classes from '../../assets/CSS/admin/AddTeacher.module.css'

const AddTeacher = props => {
    return <>
        <div className={classes.popup} onClick={props.closeAddTeacher} />
        <div className={classes.add_class}>
            <div className={classes.avatar_cls}>
                <img src="/img/giaoVien.png" alt="" />
            </div>
            <h1 className={classes.content_cls}>Thêm giáo viên</h1>
            <div className={classes.body_cls}>
                <div className={classes.add_name}>
                    <p className={classes.title_cls}>Tên giáo viên</p>
                    <input className={classes.ip_cls} type="text" name="" id="" />
                </div>
                <div className={classes.add_name}>
                    <p className={classes.title_cls}>Chức vụ</p>
                    <input className={classes.ip_cls} type="text" name="" id="" />
                </div>
                <div className={classes.add_name}>
                    <p className={classes.title_cls}>Gmail</p>
                    <input className={classes.ip_cls} type="text" name="" id="" />
                </div>
                <div className={classes.add_name}>
                    <p className={classes.title_cls}>Số điện thoại</p>
                    <input className={classes.ip_cls} type="number" name="" id="" />
                </div>
                <div className={classes.add_name}>
                    <p className={classes.title_cls}>Học vấn</p>
                    <input className={classes.ip_cls} type="text" name="" id="" />
                </div>
                <button className={classes.btn_cls}>Thêm</button>
            </div>
        </div>
    </>
}

export default AddTeacher