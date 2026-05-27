import { FileCheck, ShieldCheck, Globe, Building2, Award } from "lucide-react";
import PNCImage from "../assets/img/certificates/pnc1.png";
import PNCImage2 from "../assets/img/certificates/pnc2.png";
import PNCImage3 from "../assets/img/certificates/pnc3.png";
import HGIELImage from "../assets/img/certificates/hgiel.png";
import PNCLogo from "../assets/img/client/pnc-infra.png";
import HGIELLogo from "../assets/img/client/hgiel-logo.png";
// --- EXISTING COMPLIANCE DATA ---
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
    isSensitive: true
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

// --- NEW PROJECT COMPLETION DATA ---
export const completionCertificatesData = [
  {
  id: "comp-pnc-chitradurga",
  title: "Work Completion Certificate",
  authority: "PNC Infratech Limited",
  status: "Completed",
   clientLogo: PNCLogo,
  number: "NH-4 Package",
  desc: "Successful execution of flyovers, minor bridges, VUP, PUP, LVUP and culvert construction works for the Chitradurga–Davangere NH-4 infrastructure project in Karnataka under Hybrid Annuity Mode (NHDP Phase-V). Project completed with satisfactory performance certification.",
  icon: Award,
  image:PNCImage,
  isSensitive: false,

  details: {
    project:
      "Construction of Six Laning of Chitradurga–Davangere including Chitradurga Bypass on NH-4, Karnataka",

    scope:
      "Construction of Flyovers, Minor Bridges, VUP, PUP, LVUP and Culverts",

    executionMode:
      "Hybrid Annuity Mode (NHDP Phase-V)",

    startDate: "21 Jan 2018",
    completionDate: "20 May 2021",

    contractValue: "₹43.07 Cr",
    completedValue: "₹50.06 Cr",

    performance: "Satisfactory"
  }
},
 {
  id: "comp-pnc-nagpur-mumbai",
  title: "Work Completion Certificate",
  authority: "PNC Infratech Limited",
  clientLogo: PNCLogo,
  status: "Completed",
  number: "Package-4",
  desc: "Successful execution of major bridges, minor bridges, CUP, VUP, POP, VOP, WOP, WUP and box culvert works for the Nagpur–Mumbai Super Communication Expressway project in Maharashtra under EPC mode. Project completed with satisfactory performance certification.",
  icon: Award,
  image: PNCImage2,
  isSensitive: false,

  details: {
    project:
      "Construction of Access Controlled Nagpur–Mumbai Super Communication Expressway (Maharashtra Samruddhi Mahamarg), Package-4",

    location:
      "Washim District, Maharashtra",

    scope:
      "Construction of Major Bridges, Minor Bridges, CUP, VUP, POP, VOP, WOP, WUP and Box Culverts",

    executionMode:
      "EPC Mode",

    startDate: "16 Jan 2019",
    completionDate: "08 Mar 2022",

    contractValue: "₹56.72 Cr",
    completedValue: "₹64.56 Cr",

    performance: "Satisfactory"
  }
},
{
  id: "comp-pnc-challakere-hariyur",
  title: "Work Completion Certificate",
  authority: "PNC Infratech Limited",
  status: "Completed",
   clientLogo: PNCLogo,
  number: "NH-150A Package",
  desc: "Successful execution of flyovers, minor bridges, VUP, PUP, LVUP and culvert works for the Challakere–Hariyur section of NH-150A in Karnataka under Bharatmala Pariyojana. Project completed with satisfactory performance certification.",
  icon: Award,
  image:PNCImage3,
  isSensitive: false,

  details: {
    project:
      "Four Laning of Challakere–Hariyur Section of NH-150A, Karnataka",

    location:
      "Karnataka",

    scope:
      "Construction of Flyovers, Minor Bridges, VUP, PUP, LVUP and Culverts",

    executionMode:
      "Hybrid Annuity Mode under Bharatmala Pariyojana",

    startDate: "25 Dec 2020",
    completionDate: "31 Dec 2024",

    contractValue: "₹53.91 Cr",
    completedValue: "₹72.44 Cr",

    performance: "Satisfactory"
  }
},
{
  id: "comp-hg-neelmangala-tumkur",
  title: "Work Completion Certificate",
  authority: "H.G. Infra Engineering Ltd.",
  status: "Completed",
   clientLogo: HGIELLogo,
   darkLogoBg: true,
  number: "NH-48 EPC Package",
  desc: "Successful completion of structure works including MJB, MNB, VUP, LVUP, VOP, Flyover/GS, ROB and NJB for the six-laning access controlled Neelmangala–Tumkur section of NH-48 in Karnataka under Bharatmala Pariyojana.",
  icon: Award,
  image: HGIELImage,
  isSensitive: false,

  details: {
    project:
      "6-Laning Access Controlled Neelmangala–Tumkur Section of NH-48, Karnataka",

    location:
      "Karnataka",

    client:
      "NHAI",

    scope:
      "Structure Works including MJB, MNB, VUP, LVUP, VOP, Flyover/GS, ROB and NJB",

    executionMode:
      "EPC Mode under Bharatmala Pariyojana",

    startDate: "15 Nov 2022",
    completionDate: "21 Feb 2025",

    contractValue: "₹71.51 Cr",
    completedValue: "₹53.48 Cr",

    performance: "Successfully Completed"
  }
}
];