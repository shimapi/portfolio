const ExperienceCV = () => {
	return (
		<div className="experience-cv">
			<h4 className="experience-cv__job-name">
				{" "}
				e-commerce developer - Moda Tornasol, Chile - 2023
			</h4>
			<h5 className="experience-cv__job-date">2023</h5>
			<ul className="experience-cv__job-description">
				<li>
					Migrated a WordPress webpage to a robust Shopify e-commerce platform,
					meticulously categorizing over 2500 products into SEO-friendly
					automatic collections, which increased sales by 30%.
				</li>
				<li>
					Programmed a system to generate custom reports using React, connected
					to the Shopify API via REST API and reading info from a SQL database.
				</li>
			</ul>
		</div>
	);
};

export default ExperienceCV;
