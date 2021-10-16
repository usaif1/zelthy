//dependencies
import { FC } from "react";
import BounceLoader from "react-spinners/BounceLoader";

interface Props {
  loading: boolean;
  color: string;
  size: number;
}

const BounceLoad: FC<Props> = (props) => {
  const { loading, color, size } = props;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <BounceLoader loading={loading} size={size} color={color} />
    </div>
  );
};

export default BounceLoad;
