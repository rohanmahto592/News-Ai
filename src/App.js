
import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';
import React,{useEffect,useState} from 'react';
import NewsCards from './component/NewsCards/NewsCards';
import wordsToNumbers from 'words-to-numbers';
import useStyles from './style.js';
const alankey="77f5173eeb38d4cc587ee0ad62e55ec02e956eca572e1d8b807a3e2338fdd0dc/stage";
const  App=()=> {
const[newsArticles,setnewsArticles]=useState([]);
const[activearticle,setActiveArticle]=useState(-1);
const classes=useStyles();
  useEffect(()=>{
    alanBtn({
      key:alankey,
      onCommand:({command,articles,number})=>{
        if(command==='newHeadlines')
        {
          setnewsArticles(articles);
          setActiveArticle(-1);
          console.log(articles);
          console.log(newsArticles);
          
          
        }
        else if(command==='highlight')
        {
          setActiveArticle((prevActiveArticle)=>prevActiveArticle+1);
        }
        else if(command==='open')
        {
          console.log(number);
          const parsenumber=number.length>2 ? wordsToNumbers(number,{fuzzy:true}):number;
          const article=articles[parsenumber-1];
          if(parsenumber>20)
          {
            alanBtn().playText('please try that again!!,sorry');
          }
          else if(article)
          {
            window.open(article.url,'_blank');
            alanBtn().playText('opening!!');

        }
          
        }
      }

    })
  },[])
  return (
    <div className="App">
      <h1 className="colors">AI News Application</h1>
      <div className={classes.logoContainer}>
        <img src="https://i.pinimg.com/originals/ae/d1/1d/aed11d6975231b91c8e992c02b8376da.gif"className={classes.alanLogo} alt="alan logo" />
      </div>
      <NewsCards Articles={newsArticles} activearticle={activearticle}/>
    </div>
  );
}

export default App;
