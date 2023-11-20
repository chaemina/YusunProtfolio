import { useRouter } from "next/router"; // Next.js에서 제공하는 라이브러리로 next/router에서 import받을 수 있다

export default () => {
  const router = useRouter(); // router 객체 초기화

  return (
    <>
      <h1> blog post!! </h1>
      <p> post id: {router.query.id} </p>
    </>
  );
};
