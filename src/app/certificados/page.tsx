import { wordpressService, Certificate } from '@/services/wordpress';
import Image from 'next/image';

export default async function CertificatesPage() {
  const certificates = await wordpressService.getCertificates();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Certificados</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((certificate) => (
          <div key={certificate.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {certificate.acf.image_url && (
              <div className="relative h-48">
                <Image
                  src={certificate.acf.image_url}
                  alt={certificate.title.rendered}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                {certificate.title.rendered}
              </h2>
              
              <div className="text-gray-600 mb-2">
                Instituição: {certificate.acf.institution}
              </div>
              
              <div className="text-gray-600 mb-2">
                Data: {new Date(certificate.acf.issue_date).toLocaleDateString('pt-BR')}
              </div>
              
              {certificate.acf.certificate_url && (
                <a
                  href={certificate.acf.certificate_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-eg-green hover:underline"
                >
                  Ver Certificado
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 