 import { FileCheck, Download, Eye, ShieldCheck, Globe, Building2, Lock, X } from "lucide-react";

 // Corporate Compliance Data
  export const complianceData = [
    {
      id: "lei",
      title: "Legal Entity Identifier (LEI)",
      authority: "Companies Register (Ministry of Corporate Affairs), India",
      status: "Active ",
      number: "U45201GJ2013PTC076003",
      validity: "Active",
      desc: "Global directory verification ensuring transparent financial transactions and international tender compliance.",
      icon: Globe,
      // Using placeholder document imagery
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop",
      isSensitive: false
    },
    {
      id: "gst",
      title: "GST Registration Certificate",
      authority: "Government of India (Maharashtra Jurisdiction)",
      status: "Active",
      number: "24AAICM7088D1ZC",
      validity: "Continuous",
      desc: "Official tax registration for MB Infraprojects Pvt. Ltd. enabling nationwide procurement and EPC billing.",
      icon: Building2,
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
      isSensitive: true // Triggers extra watermark security
    },
    {
      id: "iso9001",
      title: "ISO 9001:2008 (QMS)",
      authority: "International Organization for Standardization",
      status: "Certified",
      number: "QMS-99887766",
      validity: "March 2027",
      desc: "Quality Management Systems certification for heavy civil engineering, highway construction, and EPC project execution.",
      icon: ShieldCheck,
      image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=800&auto=format&fit=crop",
      isSensitive: false
    },
  
  ];
