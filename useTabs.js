export const useTabs=(initialTab,allTabs)=>{

    if(!allTabs|| !Array.isArray(allTabs)) //allTabs가 true가 아니거나 배열 아니면
    {
      return ;
    }
    const [currentIndex,setCurrentIndex] =useState(initialTab); //currentIndex와 그 것을 컨트롤하는 setCurrentIndex 함수를 받음
  
    return{// 리턴 값이 객체에 담겨 리턴 됨,
      currentItem:allTabs[currentIndex],// 애는 현재선택된 아이템, 
      changeItem:setCurrentIndex //changeItem은 currentIndex를 컨트롤하는 함수 
    }
  }
  //사용 시 이런식을 접근
  // const {currentItem,changeItem}=useTabs(0,content); initailTab=0,allTabs이 content 배열 그 리턴값의 속성 이름으로 바로 접근하여 그 2개의 변수를 바로 사용
  