import { Card } from '../ui/Card'

const expertise = [
	{
		title: 'Google Workspace',
		description:
			'We provide best in class pricing on Google Workspace solutions for businesses of all sizes.',
	},
	{
		title: 'Google Cloud Platform',
		description:
			'We provide best in class pricing on Google Cloud Platform solutions for businesses of all sizes.',
	},
]

export function AboutUs() {
	return (
		<section id="about" className="py-20">
			<div className="container">
				<div className="mb-16 grid items-center gap-12 md:grid-cols-2">
					<div>
						<div className="relative">
							<div className="absolute -left-6 -top-6 h-24 w-24 rounded-lg bg-cloud-blue/20" />
							<div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-lg bg-cloud-purple/20" />
							<img
								src="/people-screens.avif"
								alt="Team Collaboration"
								className="relative z-10 rounded-lg object-cover shadow-lg"
							/>
						</div>
					</div>
					<div>
						<h2 className="mb-6">About BestCloudResell</h2>
						<p className="mb-4 text-lg text-muted-foreground">
							We are passionate about cloud technology and helping businesses
							achieve their goals through innovative solutions. We work with
							both small and large organizations best in class prices on cloud
							services.
						</p>
						<p className="mb-8 text-lg text-muted-foreground" />
					</div>
				</div>

				{/* Expertise */}
				<div className="mt-20">
					<div className="mx-auto mb-16 max-w-2xl text-center">
						<h2 className="mb-4">Our Expertise</h2>
						<p className="text-xl text-muted-foreground">
							Comprehensive solutions to address all your business needs
						</p>
					</div>
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{expertise.map((item, index) => (
							<Card
								key={index}
								className="p-6 transition-shadow hover:shadow-md"
							>
								<h3 className="mb-3 text-xl font-medium">{item.title}</h3>
								<p className="text-muted-foreground">{item.description}</p>
							</Card>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
