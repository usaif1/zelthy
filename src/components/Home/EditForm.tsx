//dependencies
import { FC } from "react";
import { X } from "react-feather";

//imports
import style from "./styles.module.css";

interface Props {
  user: {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
  };
  setOpen: any;
}

const inputInfo = [
  {
    id: "name",
    type: "text",
    label: "Name",
  },
  {
    id: "email",
    type: "text",
    label: "Email",
  },
  {
    id: "phone",
    type: "text",
    label: "Phone",
  },
  {
    id: "website",
    type: "text",
    label: "Website",
  },
];

const EditForm: FC<Props> = (props) => {
  const renderInputs = () => {
    return inputInfo.map((data) => {
      return (
        <div key={data.id} className={style.inputContainer}>
          <p className={style.label}>
            <span className={style.asterisk}>*</span>
            {data.label}:
          </p>
          <input type={data.type} name={data.id} className={style.input} />
        </div>
      );
    });
  };

  return (
    <>
      <div className={style.formHeadingContainer}>
        <h1>Basic Modal</h1>
        <X color="#B0B0B0" />
      </div>
      <form>
        <div className={style.formWrapper}>{renderInputs()}</div>
        <div className={`${style.formFooter}`}>
          <div className={style.btnContainer}>
            <button className={style.btnCancel}>Cancel</button>
            <button className={style.btnOk}>OK</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditForm;
