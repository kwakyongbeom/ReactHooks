export const useInput = (initialValue, validator) => { //useInput 함수는 initalValue와 validator를 매개변수로 받는다
    const [value, setValue] = useState(initialValue); // value의 초기값을 initialValue로 설정
    const onChange = (event) => { //onChange 함수 선언,매개변수로 event를 받는다
      const {
        target: { value } //input tag의 value값으로 접근하기 위해서는 event.target.value인데 이것을  event는 ->  target:<input placeholder="Name" value="Mr.4"></input> 그래서 {target:value} 로 value 접근
      } = event;
      let willUpdate = true; //업데이트를 결정할지 flag  처음으 true
  
      if (typeof validator === "function") { //만약 validator의 타입이 함수이면
        willUpdate = validator(value); //willUpdate flag를 validator의 리턴값 
      }
      if (willUpdate) { //만약 여기서도 true이면
        setValue(value); //업데이트를 결정하겠다 
      }
    };
    return { value, onChange };
  };