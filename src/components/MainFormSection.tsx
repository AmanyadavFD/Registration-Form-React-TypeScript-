import { type FC } from "react";
import Box from "./Box";

const MainFormSection: FC = () => {
  return (
    <main>
      <Box className="wrapper" as={"div"}>
        <form></form>
      </Box>
    </main>
  );
};

export default MainFormSection;
