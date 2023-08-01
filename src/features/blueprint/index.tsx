import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import style from "./Index.module.css";
import Link from "@mui/material/Link";
import { typographText } from "../../utils/theme";

const boxStyle = {
  display: 'inline-block',
  mx: '2px',
  ml: '2rem',
  mr: '2rem',
  maxWidth: '50.125rem',
}

function BluePrint() {

  return (
    <>
      <Box
        component="div"
        sx={boxStyle}
      >
        <h1 className={style.title}>
          The UI
        </h1>
        <Typography variant="body2" sx={typographText}>
          As a frontend developer, I chose one of the modern frameworks.  In this case,
          this portfolio is built with <strong>React.js</strong> using <strong>create-react-app</strong>.
          If you are a web developer or UX designer, most likely you notice I am
          using <Link data-cy="mui-link" rel="noopener noreferrer" href={"https://m3.material.io/"}>Material Design</Link> from Google
          but with React <Link rel="noopener noreferrer" href={"https://mui.com/"}>MUI</Link>.
        </Typography>
        <Typography variant="body2" sx={typographText}>
          A notable node.js library that this portfolio leverages is <strong>Redux.js</strong> in particular <strong>Redux Toolkit</strong> and <strong>Redux-Saga</strong> to
          handle state management, side effects, and HTTP requests.
        </Typography>
        <Typography variant="body2" sx={typographText}>
          See this <Link data-cy="github-dashboard-link" rel="noopener noreferrer" href={"https://github.com/hannguyen-dev/portfolio-dashboard"}>Github</Link> link for the source code.
        </Typography>
      </Box>
      <Box
        component="div"
        sx={boxStyle}
      >
        <h1>
          The API
        </h1>
        <Typography sx={typographText}>
          The microservice is written in <strong>Java</strong> using <strong>Spring Boot</strong>.  The weather feature interfaces
          with 3 other external APIs: <Link data-cy="google-map-api-link" rel="noopener noreferrer" href="https://developers.google.com/maps">
            Google Maps
          </Link>
          , <Link data-cy="ip-info-link" rel="noopener noreferrer" href="https://ipinfo.io/">
            Ipinfo
          </Link>,
          and <Link data-cy="open-weather-link" rel="noopener noreferrer" href="https://openweathermap.org">OpenWeatherMap</Link>.
        </Typography>
        <Typography sx={typographText}>
          Google Maps enhances the user experience by providing autocompletion for places and addresses.
          With autocompletion, the number of incorrect HTTP requests with invalid entries were reduced.
          OpenWeatherMap delivers current weather conditions and forecasts based on the longitudes and latitudes passed to the API.
          Finally, Ipinfo is used to retrieve the user's longitudes and latitudes.
        </Typography>
        <Typography variant="body2" sx={typographText}>
          See this <Link data-cy="github-weather-api" rel="noopener noreferrer" href={"https://github.com/HanNguyen-dev/portfolio-weather"}>Github</Link> link for the source code.
        </Typography>
      </Box>

      <Box
        component="div"
        sx={{
          ...boxStyle,
          mb: "6rem",
        }}
      >
        <h1 className={style.aligment}>
          Cloud
        </h1>
        <Typography sx={typographText} gutterBottom>
          First, the UI is hosted as a static website in <strong>AWS S3</strong>, and <strong>AWS CloudFront</strong> is the public portal and CDN to access this website.
        </Typography>
        <Typography sx={typographText}>
          The API is containerized with <strong>Docker</strong>, deployed to <strong>Azure App Services</strong>, and hosted at
          the following url: <Link
            data-cy="azure-website"
            sx={{
              overflowWrap: 'break-word',
              wordWrap: 'break-word',
              wordBreak: 'break-word',
            }}
            href="https://weatherportfolio.azurewebsites.net/">
              https://weatherportfolio.azurewebsites.net
          </Link>.
        </Typography>
      </Box>

    </>
  );
}

export default BluePrint;