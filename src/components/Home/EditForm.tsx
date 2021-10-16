//dependencies
import { FC, useEffect } from "react";
import { X } from "react-feather";

//imports
import style from "./styles.module.css";

//actions
import { disableBodyScroll, enableBodyScroll } from "actions";
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

const EditForm: FC<Props> = (props) => {
  const { user, setOpen } = props;

  const inputInfo = [
    {
      id: "name",
      type: "text",
      label: "Name",
      value: user.name,
    },
    {
      id: "email",
      type: "text",
      label: "Email",
      value: user.email,
    },
    {
      id: "phone",
      type: "text",
      label: "Phone",
      value: user.phone,
    },
    {
      id: "website",
      type: "text",
      label: "Website",
      value: user.website,
    },
  ];

  const renderInputs = () => {
    return inputInfo.map((data) => {
      return (
        <div key={data.id} className={style.inputContainer}>
          <p className={style.label}>
            <span className={style.asterisk}>*</span>
            {data.label}:
          </p>
          <input readOnly={true} value={data.value} type={data.type} name={data.id} className={style.input} />
        </div>
      );
    });
  };

  useEffect(() => {
    disableBodyScroll();
    return enableBodyScroll;
  }, []);

  const closeModal = () => {
    enableBodyScroll();
    setOpen(false);
  };

  return (
    <>
      <div className={style.formHeadingContainer}>
        <h1>Basic Modal</h1>
        <X color="#B0B0B0" onClick={() => setOpen(false)} style={{ cursor: "pointer" }} />
      </div>
      <form>
        <div className={style.formWrapper}>{renderInputs()}</div>
        <div className={style.formFooter}>
          <div className={style.btnContainer}>
            <button className={style.btnCancel} onClick={closeModal}>
              Cancel
            </button>
            <button className={style.btnOk} onClick={closeModal}>
              OK
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditForm;
