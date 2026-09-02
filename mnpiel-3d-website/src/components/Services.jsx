import React, { useState, useEffect } from 'react';
import { HardHat, Compass, Layers, Scan, Ruler, ArrowRight, X, Check, Wrench, FileText, Briefcase } from 'lucide-react';
import styles from './Services.module.css';

export default function Services({ onActiveServiceChange, onNavigate }) {
  const [activeService, setActiveService] = useState('survey'); // Default to survey
  const [modalService, setModalService] = useState(null); // Active service in detail modal

  useEffect(() => {
    if (modalService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [modalService]);

  const services = [
    {
      id: 'construction',
      label: 'Construction',
      icon: HardHat,
      color: 'yellow',
      title: 'Structural Construction',
      description: 'Residential, commercial, and industrial construction from foundation to finish. We manage the entire build with quality and on-time delivery.',
      features: [
        { title: 'Residential Buildings', desc: 'From custom G+1 villas to G+10 residential complexes.' },
        { title: 'Commercial Complexes', desc: 'Modern workspaces, business parks, and shopping spaces.' },
        { title: 'Industrial Structures', desc: 'Warehouses, structural steel sheds, and plant foundations.' },
        { title: 'Infrastructure Works', desc: 'Bridges, concrete structures, and retaining walls.' }
      ],
      fullDetails: {
        overview: 'Our structural construction division handles comprehensive civil engineering projects across Andhra Pradesh & Telangana. We manage every phase from initial ground excavation, foundation casting (RCC footings & pile caps), structural superstructure erection, masonry, MEP installation, through to final interior and exterior finishing.',
        technologies: [
          'High-grade Ready Mix Concrete (RMC) batching & slump monitoring',
          'Heavy structural steel truss fabrication & erection rigs',
          'Digital laser levelling & Total Station column grid setting out',
          'Safety-certified scaffolding & formwork systems'
        ],
        deliverables: [
          'AP & TS Municipal Approved Architectural & Structural Blueprints',
          'G+1 to G+10 RCC Frame Execution & Quality Certificates',
          'Comprehensive Bill of Quantities (BOQ) & Steel / Cement Test Audit Reports',
          'Turnkey Project Handover with Structural Safety Guarantees'
        ],
        applications: ['Residential Gated Communities', 'Commercial Retail Parks', 'Industrial Warehouses & Steel Sheds', 'Municipal Infrastructure & Bridges']
      }
    },
    {
      id: 'survey',
      label: 'Land Surveying',
      icon: Compass,
      color: 'teal',
      title: 'Precision Land Surveying',
      description: 'Precision boundary surveys, topographic surveys, and cadastral mapping using state-of-the-art total stations and GPS equipment.',
      features: [
        { title: 'Boundary Demarcation', desc: 'High-accuracy legal boundary surveys and marking.' },
        { title: 'Topographic Surveys', desc: 'Elevation profiling, contours, and physical feature mapping.' },
        { title: 'Subdivision Layouts', desc: 'Urban development plot layout mapping and approval assistance.' },
        { title: 'Setting Out / As-Built', desc: 'Transferring architectural drawings to physical sites exactly.' }
      ],
      fullDetails: {
        overview: 'Using dual-frequency DGPS/GNSS receivers and motorized electronic total stations, our geospatial team delivers millimeter-accurate land boundary demarcation, contour profiling, and cadastral mapping. We help property developers, government agencies, and industrial clients establish unquestionable site accuracy.',
        technologies: [
          'Dual-Frequency DGPS / RTK GNSS Receivers (Sub-centimeter accuracy)',
          'Motorized 1-Second Electronic Total Stations',
          'AutoCAD Civil 3D & QGIS Georeferenced Survey Processing'
        ],
        deliverables: [
          'Certified Boundary Demarcation Maps with Geo-coordinates',
          'Topographic Contour Maps (0.5m & 1m Elevation Intervals)',
          'AutoCAD DXF/DWG Plot Subdivision Layout Drawings',
          'As-Built Location Survey Reports for Site Audits'
        ],
        applications: ['Real Estate Layout Marking', 'Highway & Railway Corridor Demarcation', 'Government Cadastral Verification', 'Industrial Land Acquisition']
      }
    },
    {
      id: 'drilling',
      label: 'Soil Testing & Drilling',
      icon: Layers,
      color: 'teal',
      title: 'Soil Testing & Geotechnical Drilling',
      description: 'Comprehensive soil testing and geotechnical core drilling. We perform Standard Penetration Tests (SPT), soil bearing capacity analysis, compaction testing, and physical sample logging to support safe engineering designs.',
      features: [
        { title: 'Soil Strata Profiling', desc: 'Borehole logging to map subsurface layers and soil classification.' },
        { title: 'Bearing Capacity Testing', desc: 'Evaluating load capacity (SPT, plate load tests) for foundations.' },
        { title: 'Undisturbed Sampling', desc: 'Extracting rock and soil core samples for laboratory analysis.' },
        { title: 'Geotechnical Reports', desc: 'Certified technical reports with engineering recommendations.' }
      ],
      fullDetails: {
        overview: 'Subsurface foundation safety starts with rigorous geotechnical drilling. Our heavy hydraulic rotary drill rigs execute boreholes down to 30+ meters deep, collecting undisturbed soil and rock core samples. We conduct Standard Penetration Testing (SPT) on site and full laboratory compression/shear testing.',
        technologies: [
          'Heavy Hydraulic Rotary Drilling Rigs & Core Barrels',
          'Split-Spoon Samplers for Standard Penetration Tests (SPT)',
          'Laboratory Triaxial & Direct Shear Testing Equipment',
          'Moisture Content & Atterberg Limits Soil Analyzers'
        ],
        deliverables: [
          'Certified Subsurface Stratum Borehole Logs',
          'Safe Bearing Capacity (SBC) Calculations & Foundation Type Advice',
          'Lab Soil Physical & Chemical Analysis Certificates',
          'Signed Geotechnical Engineering Feasibility Reports'
        ],
        applications: ['High-Rise Building Foundations', 'Bridge Pier & Highway Abutment Feasibility', 'Heavy Industrial Equipment Footings', 'Retaining Wall & Slope Stability Audits']
      }
    },
    {
      id: 'drone',
      label: 'Drone Mapping',
      icon: Scan,
      color: 'teal',
      title: 'UAV Survey & Mapping',
      description: 'UAV-based aerial photography, photogrammetric surveys, volumetric analysis, and high-resolution orthoimagery for any terrain.',
      features: [
        { title: 'Aerial Orthoimagery', desc: 'Stitched high-resolution georeferenced aerial maps.' },
        { title: 'Photogrammetric Clouds', desc: 'High-density 3D point clouds and digital surface models.' },
        { title: 'Stockpile Volume Calc', desc: 'Precise volumetric analysis of aggregates, sand, or coal.' },
        { title: 'Progress Monitoring', desc: 'Periodic aerial tracking of large-scale site progression.' }
      ],
      fullDetails: {
        overview: 'Our DGCA-certified UAV pilots utilize RTK-enabled mapping drones to rapidly capture high-resolution aerial imagery over vast or difficult terrains. We process photogrammetric datasets to deliver 3D point clouds, Digital Terrain Models (DTM), and accurate stockpile volumetric audits.',
        technologies: [
          'DJI Matrice 300 RTK & Phantom 4 RTK Survey Drones',
          'High-Resolution 45MP Full-Frame Photogrammetry Sensors',
          'Pix4D Mapper & Agisoft Metashape 3D Point Cloud Processors'
        ],
        deliverables: [
          'Georeferenced High-Res Orthomosaic Maps (GSD < 1.5 cm/px)',
          '3D Point Cloud (.LAS) & Digital Terrain Models (DTM/DSM)',
          'Cut/Fill Volumetric Stockpile Quantity Audit Reports',
          'Periodic Video & Aerial Site Progress Progress Inspections'
        ],
        applications: ['Open-Cast Mining & Quarry Stockpile Audits', 'Highway Alignment & Corridor Mapping', 'Smart City & Large Land Parcel Planning', 'Solar & Wind Farm Site Surveys']
      }
    },
    {
      id: 'design',
      label: 'Design & Estimation',
      icon: Ruler,
      color: 'teal',
      title: 'Design & Estimation Services',
      description: 'Architectural & structural design, AutoCAD drafting, detailed Bill of Quantities (BOQ) preparation, and accurate project cost estimation.',
      features: [
        { title: 'Architectural Drafting', desc: 'Conceptual blueprints and detailed 2D/3D AutoCAD outputs.' },
        { title: 'Structural Design', desc: 'RCC and steel structure design with safety and code checks.' },
        { title: 'Detailed BOQ', desc: 'Item-wise material quantity and cost estimates.' },
        { title: 'Cost Estimation', desc: 'Accurate financial budget planning for public/private projects.' }
      ],
      fullDetails: {
        overview: 'Our structural engineering and CAD cell translates conceptual visions into detailed 2D/3D blueprints and comprehensive financial estimates. We prepare itemized Bill of Quantities (BOQ) following Indian Standard (IS) codes to ensure cost discipline and structural resilience.',
        technologies: [
          'AutoCAD & Revit 3D Architectural Design Suite',
          'STAAD.Pro & ETABS Structural Analysis & Seismic Checking Software',
          'Custom BOQ & Material Rate Analysis Databases'
        ],
        deliverables: [
          'Municipal Approval Ready Architectural Floor Plans & Elevations',
          'RCC Structural Column, Beam & Slab Reinforcement Details',
          'Detailed Itemized Bill of Quantities (BOQ) & Cost Estimation Sheets',
          'Structural Stability & Seismic Safety Certificates'
        ],
        applications: ['Private Residence & Commercial Building Plans', 'Bank Loan Project Cost Certificates', 'Government Infrastructure Tender BOQs', 'Structural Retrofitting & Renovation Audits']
      }
    }
  ];

  const handleServiceSelect = (id) => {
    setActiveService(id);
    if (onActiveServiceChange) {
      onActiveServiceChange(id);
    }
  };

  const currentService = services.find(s => s.id === activeService);
  const activeModalData = services.find(s => s.id === modalService);

  return (
    <section id="services" className={styles.servicesSection}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left panel: Intro & service selector */}
          <div className={styles.intro}>
            <div className="badge">Our Core Services</div>
            <h2 className={styles.title}>What We Deliver</h2>
            <p className={styles.description}>
              We provide end-to-end site engineering, geospatial mapping, and robust construction services tailored to municipal standards and complex environments.
            </p>

            <div className={styles.serviceList}>
              {services.map((service) => {
                const Icon = service.icon;
                const isActive = service.id === activeService;
                let btnClass = styles.serviceBtn;
                if (isActive) {
                  btnClass += ` ${service.color === 'yellow' ? styles.activeServiceBtnYellow : styles.activeServiceBtn}`;
                }
                return (
                  <button
                    key={service.id}
                    className={btnClass}
                    onClick={() => handleServiceSelect(service.id)}
                  >
                    <div className={styles.iconWrapper}>
                      <Icon size={20} />
                    </div>
                    <span className={styles.serviceLabel}>{service.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right panel: Detail card */}
          <div className={`${styles.detailPanel} glass-panel`}>
            <div>
              <div className={styles.detailHeader}>
                <div className={`badge ${currentService.color === 'yellow' ? 'badge-yellow' : ''}`}>
                  {currentService.label} Overview
                </div>
                <h3 className={styles.detailTitle}>
                  {currentService.title}
                </h3>
                <p className={styles.detailDesc}>
                  {currentService.description}
                </p>
              </div>

              <div className={styles.featureGrid}>
                {currentService.features.map((feat, idx) => (
                  <div key={idx} className={styles.featureCard}>
                    <h4 className={styles.featureTitle}>{feat.title}</h4>
                    <p className={styles.featureDesc}>{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.detailFooter}>
              <button 
                className="btn btn-secondary"
                onClick={() => setModalService(currentService.id)}
                style={{ marginRight: '1rem' }}
              >
                View Full Specifications
              </button>
              <button 
                className={`btn ${currentService.color === 'yellow' ? 'btn-construction' : 'btn-primary'}`}
                onClick={() => onNavigate('contact')}
              >
                Inquire About Service
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Full Specification Modal */}
      {modalService && activeModalData && (
        <div className={styles.modalOverlay} onClick={() => setModalService(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalCloseBtn} onClick={() => setModalService(null)} aria-label="Close Modal">
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
              <div className="badge" style={{ marginBottom: '0.75rem' }}>Service Specifications</div>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                {activeModalData.title}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
                {activeModalData.fullDetails.overview}
              </p>
            </div>

            {/* Service Switcher Tabs Inside Modal */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem' }}>
              {services.map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setModalService(s.id);
                    handleServiceSelect(s.id);
                  }}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    cursor: 'pointer',
                    background: s.id === modalService ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                    color: s.id === modalService ? '#fff' : 'var(--text-secondary)',
                    border: '1px solid',
                    borderColor: s.id === modalService ? 'var(--primary)' : 'rgba(255,255,255,0.1)',
                    transition: 'all 0.2s',
                  }}
                >
                  {s.label}
                </button>
              ))}
            </div>

            {/* Modal Specs Sections */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
              {/* Equipment & Technologies */}
              <div style={{ background: 'rgba(20, 20, 20, 0.6)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h4 style={{ color: 'var(--primary)', fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Wrench size={18} /> Equipment & Tech Stack
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {activeModalData.fullDetails.technologies.map((item, idx) => (
                    <li key={idx} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.75rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                      <Check size={16} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Deliverables */}
              <div style={{ background: 'rgba(20, 20, 20, 0.6)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h4 style={{ color: '#ffffff', fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FileText size={18} /> Client Deliverables
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {activeModalData.fullDetails.deliverables.map((item, idx) => (
                    <li key={idx} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.75rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                      <Check size={16} style={{ color: '#28a745', flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Target Applications */}
            <div style={{ background: 'rgba(20, 20, 20, 0.4)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '2rem' }}>
              <h4 style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', fontSize: '1rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Briefcase size={16} /> Target Sector Applications
              </h4>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {activeModalData.fullDetails.applications.map((app, idx) => (
                  <span key={idx} style={{ background: 'rgba(211, 18, 17, 0.1)', border: '1px solid rgba(211, 18, 17, 0.3)', color: 'var(--text-primary)', padding: '0.35rem 0.85rem', borderRadius: '20px', fontSize: '0.85rem' }}>
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Action */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
              <button className="btn btn-secondary" onClick={() => setModalService(null)}>
                Close
              </button>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setModalService(null);
                  onNavigate('contact');
                }}
              >
                Inquire For This Service
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
