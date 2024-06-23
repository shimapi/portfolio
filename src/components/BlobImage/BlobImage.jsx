import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const blob1 =
	"M21.8,-36.1C28.1,-34.2,32.7,-27.9,35,-21.1C37.3,-14.4,37.3,-7.2,36.5,-0.5C35.7,6.3,34.1,12.6,31.4,18.5C28.6,24.5,24.6,30.1,19.2,33.9C13.8,37.6,6.9,39.5,-0.2,39.8C-7.2,40.1,-14.5,38.9,-19.6,34.9C-24.8,31,-27.8,24.4,-29.6,18.1C-31.3,11.9,-31.8,5.9,-33.4,-1C-35.1,-7.8,-37.9,-15.7,-36.6,-22.6C-35.2,-29.6,-29.6,-35.6,-22.8,-37.1C-16,-38.6,-8,-35.5,-0.1,-35.4C7.8,-35.2,15.6,-37.9,21.8,-36.1Z";
const blob2 =
	"M20.5,-32.3C27.3,-31.2,32.9,-24.7,37.3,-18C41.7,-11.3,44.8,-4.4,45.2,2.5C45.7,9.5,43.6,16.5,39.7,22.7C35.9,28.9,30.3,34.2,24.3,37.3C18.4,40.4,12.2,41.3,6.6,39.6C0.9,37.8,-4.1,33.3,-9.2,29.4C-14.2,25.6,-19.4,22.4,-23.1,17.9C-26.8,13.5,-28.9,7.8,-30.8,1.9C-32.7,-4,-34.3,-10.9,-31.8,-17.1C-29.3,-23.2,-22.8,-28.7,-16,-30.8C-9.2,-32.9,-4.6,-31.5,1,-32.8C6.6,-34.1,13.3,-38,20.5,-32.3Z";
const blob3 =
	"M19.4,-32C25,-30.4,29.4,-24.9,31.1,-19C32.8,-13,31.8,-6.5,31.3,-0.3C30.8,5.9,30.7,11.8,28.8,17.4C26.9,23.1,23.2,28.5,18.1,29.6C13,30.8,6.5,27.8,-0.3,28.4C-7.1,28.9,-14.3,33,-20.6,32.5C-26.9,32,-32.5,27,-36,20.8C-39.5,14.6,-40.9,7.3,-39.3,0.9C-37.7,-5.4,-33,-10.9,-29.8,-17.6C-26.6,-24.2,-24.9,-32.1,-20.1,-34.3C-15.4,-36.4,-7.7,-32.7,-0.4,-32C6.9,-31.3,13.8,-33.6,19.4,-32Z";

const BlobImage = ({ photo, altPhoto }) => {
	const blobs = [blob1, blob2, blob3];
	const [blobPath, setBlobPath] = useState(blob1);

	useEffect(() => {
		const randomBlob = blobs[Math.floor(Math.random() * blobs.length)];
		setBlobPath(randomBlob);
	}, []);

	return (
		<svg
			id="sw-js-blob-svg"
			viewBox="0 0 100 100"
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			width="250"
			height="250"
		>
			<defs>
				<clipPath id="blob-clip">
					<path d={blobPath} transform="translate(50 50)" />
				</clipPath>
			</defs>
			<g clipPath="url(#blob-clip)">
				<image
					href={photo}
					x="0"
					y="0"
					height="100%"
					width="100%"
					alt={altPhoto}
				/>
			</g>
		</svg>
	);
};

BlobImage.propTypes = {
	altPhoto: PropTypes.string,
	photo: PropTypes.string,
};

export default BlobImage;
