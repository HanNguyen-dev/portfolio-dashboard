import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { typographText } from "../../../../utils/theme";

export default function Introduction() {
  return (
    <>
      <h1>
          Hi, I am Han.
        </h1>
        <Typography variant="body2" sx={typographText}>
          Welcome to my portfolio website.
        </Typography>
        <Typography sx={typographText}>
          Needless to say, the intention of this site is to showcase the various technologies and languages that I have acquired throughout my career.
          Many will agree that summarizing one's life work in a 1-to-2-page résumé doesn't do justice to any software developer.
        </Typography>
        <Typography sx={typographText}>
          By profession, I am a Frontend Engineer, but this portfolio is meant to represent my skill set holistically,
          so this website consists of both backend and frontend.  These services are hosted on the public cloud through
          both <strong>Amazon Web Services</strong> and <strong>Microsoft Azure</strong>.
          Why both? <strong>Cost!!</strong>
        </Typography>
        <Typography sx={typographText}>
          See the <Link to={"/blueprint"}>Blueprint</Link> tab for further details of the tech stack used to built this portfolio.
        </Typography>
    </>

  );
}