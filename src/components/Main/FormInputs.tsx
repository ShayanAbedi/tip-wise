import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';

type Props = {};

interface MyFormValues {
  bill: number;
}

const FormInputs = (props: Props) => {
  const initialValues: MyFormValues = { bill: 0 };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });

          alert(JSON.stringify(values, null, 2));

          actions.setSubmitting(false);
        }}
      >
        <Form>
          <div>
            <label htmlFor="bill" className="float-left">
              Bill
            </label>
            <div className="flex">
              <p className="relative text-lightGrayishCyan left-4">$</p>
              <Field
                id="bill"
                name="bill"
                placeholder=""
                className="border-2 border-darkGaryishCyan max-w-xs text-right"
              />
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default FormInputs;
