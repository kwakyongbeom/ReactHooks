//use Effect는 ComponentDidMount,ComponentWillUnMount,ComponentDidUpdate 모두 가지고 있음
//useEffect는 3가지 사용 방식이 있따
//useEffect(x); // x가 mount됬을 때 실행되고, 어떤 UI가 바뀔 때마다 호출됨
//useEffect(x,[]) //x가 mount됬을 때 실행되고, 어떤 UI가 바뀌어도 호출되지 안흠
//useEffect(x,[number]) //x가 mount됬을 때 실행되고,오직 number가 바뀔때마다 호출됨
export const sayHello = () => console.log("Heelo");
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  useEffect(sayHello, [number]);