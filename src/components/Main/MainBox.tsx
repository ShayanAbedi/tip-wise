import Form from './FormInputs';
import Result from './Result';

type Props = {};

const MainBox = (props: Props) => {
  return (
    <div className="mt-32 p-10 w-3/4 m-auto rounded-3xl bg-white shadow-xl grid grid-cols-2">
      <Form />
      <Result />
    </div>
  );
};

export default MainBox;
