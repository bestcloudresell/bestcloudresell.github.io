import {
	Cloud,
	Cpu,
	Database,
	FolderKanban,
	Globe,
	Server,
	ShieldHalf,
} from 'lucide-react'
import { ServiceCard } from '../ui/ServiceCard'

// Astro does not support passing JSX elements as props, so we do it in tsx land instead

/* TODO:
 * Technical project management
 * Cloud architecture design
 * Security and compliance
 * Cost optimization
 * DevOps and CI/CD
 * Automotive reverse engineering
 * Hardware homologation
 * Embedded systems project management
 * Telematics and IoT
 * Automotive cybersecurity
 * Automotive software development
 * IoT Cellular connectivity
 * Google Workspace
 * Google Cloud Platform
 * Microsoft Azure
 * Amazon Web Services
 * Cloud migration
 * Terraform
 * Kubernetes
 * Docker
 */

export function ServiceList() {
	return (
		<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
			<ServiceCard
				title="Google Cloud Platform Reselling"
				description="Affordable Google Cloud Platform solutions for businesses of all sizes."
				icon={<Cloud className="h-6 w-6" />}
				features={['GCP', 'Compute Engine', 'Cloud Storage', 'BigQuery']}
				colorClass={'from-cloud-aws to-orange-600'}
				link="/contact"
			/>
			<ServiceCard
				title="Google Workspace Licensing"
				description="Cost-effective Google Workspace licensing for seamless collaboration."
				icon={<FolderKanban className="h-6 w-6" />}
				features={['G Suite', 'Gmail', 'Google Drive']}
				link="/contact"
				colorClass={'from-cloud-azure to-blue-700'}
			/>
		</div>
	)
}
