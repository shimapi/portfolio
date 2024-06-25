import "./Volunteering.scss";
import { useTranslation } from "react-i18next";

import coderhouse from "../../../public/images/charla-wtm-coderhouse.jpg";
import coderhouse2 from "../../../public/images/charla-wtm-coderhouse2.jpg";
import sparkCode from "../../../public/images/Spark-Code-Mayo24-1.jpeg";
import pulseritas from "../../../public/images/wtm-altorrelieve.png";
import wtm from "../../../public/images/wtm-voluntariado.jpg";
import wtm2 from "../../../public/images/Spark-Code-Mayo24-16.jpg";
import hackathon from "../../../public/images/hackathon.jpg";
import wtmYO from "../../../public/images/Spark-Code-Mayo24-1yo.png";

const Volunteering = () => {
	const { t } = useTranslation();

	return (
		<>
			<h4 className="title"> {t("general.VolTitle")} </h4>

			<div className="volunteer">
				<div className="volunteer__gallery">
					<img
						src={coderhouse}
						alt="Conversación sobre la mujer en la tecnología en Coderhouse"
						className="volunteer__gallery-photo"
					/>
					<img
						src={coderhouse2}
						alt="Conversación sobre la mujer en la tecnología en Coderhouse"
						className="volunteer__gallery-photo"
					/>
					<img
						src={sparkCode}
						alt="Tomando fotitos en Spark Code"
						className="volunteer__gallery-photo"
					/>

					<img
						src={wtm}
						alt="Voluntarias en evento de conmemoración del día de la mujer"
						className="volunteer__gallery-photo"
					/>
					<img
						src={wtm2}
						alt="Voluntarias en evento de conmemoración del día de la mujer"
						className="volunteer__gallery-photo"
					/>
					<img
						src={hackathon}
						alt="Voluntarias en evento de conmemoración del día de la mujer"
						className="volunteer__gallery-photo"
					/>
					<img
						src={wtmYO}
						alt="Voluntarias en evento de conmemoración del día de la mujer"
						className="volunteer__gallery-photo"
					/>
					<img
						src={pulseritas}
						alt="Pulseras y aritos para el evento de WTM"
						className="volunteer__gallery-photo"
					/>
				</div>
			</div>
		</>
	);
};

export default Volunteering;
