import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuIcon from '@mui/icons-material/Menu';
import classes from '../../assets/CSS/general/TimeTable.module.css'
import { Delete } from "@mui/icons-material";
import axios from "axios";

const Day = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"]
const Type = ["students", "teachers"];

const TimeTableDay = props => {
    const [schedule, setSchedule] = useState([])

    useEffect(async () => {
        const res = await axios.get("http://127.0.0.1:8000/" + Type[props.type] + "/" + localStorage.getItem('id') + "/schedules/" + props.id)
        setSchedule(res.data);
    }, [])

    return <>
        <a className={classes.button1} href="">
            <span className={classes.btn1}>{Day[props.id]}</span>
        </a>
        <div className={classes.content}>
            {schedule.map(element =>
                <div className={classes.card}>
                    <div className={classes.card_menu} ><Delete /></div>
                    <h3>{element.time_start}h- {element.time_finish}h</h3>
                    <h5>{element.title}</h5>
                </div>)}

        </div>
    </>
}

export default TimeTableDay;