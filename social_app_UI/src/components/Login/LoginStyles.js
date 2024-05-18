import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  wrapper: {
    justifyContent:"spaceEvenly",
    minHeight:"100vh",
    display:"flex",
    flexDirection: "row",
    width: "80%",
    margin: "auto"
  },
  section:{
    width: "50vw",
    justifyContent:"spacebetween",
    height:"60vh",
    margin:"auto",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    fontFamily: "Helvetica, Arial, sansSerif",
  },
  img:{
    height:"106px",
    margin:0
  },
  description:{
    fontSize: "24px",
    lineHeight: "28px",
    width: "auto",
    margin:0,
    marginLeft:"30px"
  },
  paragraph:{
    borderTop: "none",
    color: "#1c1e21",
   fontFamily: "SFProText-Regular, Helvetica, Arial, sansSerif",
   fontSize: "14px",
   fontWeight: "normal"
  },
  infoSection:{
    width: "40vw",
    height:"60vh",
    margin:"auto",
    display:"flex",
    flexDirection:"column",
    alignItems:"start",
    justifyContent: "center",
    fontFamily: "Helvetica, Arial, sansSerif",
  }

});

