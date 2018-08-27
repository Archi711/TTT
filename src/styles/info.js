import {css} from 'glamor';

export default {
  header : css({
    width : '80vw',
    margin : '0 auto',
    minHeight : '5vh',
    boxSizing : 'border-box',
    backgroundColor : '#f92672',
    border : '1em solid #f92672',
    borderBottomLeftRadius : '1em',
    borderBottomRightRadius : '1em',
  }),
  infoHead : css({
    width : '100%',
    margin : '0',
    padding : '.3em',
    color : '#F8CA00',
    textAlign : 'center',
    backgroundColor : '#b01550',
    borderRadius : '.4em',
  }),
  mainInfo : css({
    margin : '0 auto',
    maxWidth : '80vw',
    display : 'flex',
    flexWrap : "wrap",
  }),
  pInfo: css({
    flex : "1",
    margin : '0.2em',
    padding : '.5em',
    borderRadius : '.5em',
    backgroundColor : '#b01550',
    color : '#F9DA11',
    textAlign : "center",
  }),
}