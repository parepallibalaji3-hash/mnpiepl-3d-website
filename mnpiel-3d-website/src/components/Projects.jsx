import React, { useState, useEffect } from 'react';
import { 
  Train, Map, Droplets, Anchor, Globe, 
  Zap, Mountain, Scan, Route, X, ArrowRight, CheckCircle2, ShieldCheck, Cpu 
} from 'lucide-react';
import styles from './Projects.module.css';

export default function Projects({ onNavigate }) {
  const [selectedSector, setSelectedSector] = useState(null);

  useEffect(() => {
    if (selectedSector) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedSector]);

  const projectSectors = [
    {
      code: 'SEC-01',
      id: 'railways',
      icon: Train,
      title: 'Railway & Metro Rail',
      desc: 'Complete corridor engineering and alignment mapping to support rapid transit rail network laying.',
      features: [
        'Railway Alignment Surveys',
        'Metro Corridor Mapping',
        'Track Design Support',
        'Infrastructure Planning'
      ],
      fullDetails: {
        overview: 'Our railway and mass rapid transit (MRT) cell provides high-precision alignment surveys, embankment stability assessments, and track profile verification across major rail networks. We assist transit authorities and main contractors in minimizing radius errors and optimizing cut/fill quantities.',
        capabilities: [
          'Kilometer-by-kilometer center-line track setting out & curve alignment',
          'Metro elevated viaduct column footprint & pier positioning',
          'Track ballast volume estimation & earthwork cross-section profiling',
          'Station yard layout topography & drainage corridor mapping'
        ],
        standards: 'Indian Railways Permanent Way Manual & Metro Transit Standards Compliance',
        deliverables: ['Georeferenced L-Sections & Cross-Sections', 'Track Alignment CAD Drawings', 'Volumetric Cut/Fill Quantities Spreadsheet', 'Pier Location Coordinates Table']
      }
    },
    {
      code: 'SEC-02',
      id: 'urban',
      icon: Map,
      title: 'Urban Planning Master Plans',
      desc: 'High-accuracy zoning surveys and municipal land-use mapping using geospatial databases.',
      features: [
        'City Development Plans',
        'Land Use Mapping',
        'Zoning Analysis',
        'Urban GIS Services'
      ],
      fullDetails: {
        overview: 'We support municipal corporations, urban development authorities, and smart city planners with ground-truth geospatial data. From boundary verification of public layout lands to multi-layered GIS mapping, our surveys lay the groundwork for sustainable urban master planning.',
        capabilities: [
          'High-density urban ward boundary demarcation & layout mapping',
          'Existing land-use digitizing (Residential, Commercial, Industrial, Greenbelt)',
          'Encroachment identification & municipal plot verification',
          'GIS attribute database creation for municipal taxation & utility networks'
        ],
        standards: 'AP & TS Municipal Development Authority & Smart City Master Plan Guidelines',
        deliverables: ['GIS Shapefiles & GeoTIFF Master Layers', 'Municipal Ward Boundary Maps', 'Zoning Classification Reports', 'Public Utility Location Datasets']
      }
    },
    {
      code: 'SEC-03',
      id: 'irrigation',
      icon: Droplets,
      title: 'Irrigation & Water Resources',
      desc: 'Hydrology tracking, canal profiles, and reservoir catchment modeling for irrigation works.',
      features: [
        'Canal Surveys',
        'Hydrology Analysis',
        'Reservoir Mapping',
        'Water Resource Planning'
      ],
      fullDetails: {
        overview: 'Water infrastructure demands precise slope and hydraulic gradient calculations. MNPIEPL delivers detailed canal alignment surveys, bathymetric reservoir capacity audits, and river basin catchment elevation modeling across major state irrigation projects.',
        capabilities: [
          'Main canal, branch canal & distributary longitudinal slope surveying',
          'Reservoir submergence contouring & storage volume curve calculation',
          'Hydraulic structure positioning (Sluices, Aqueducts, Weirs)',
          'Floodplain mapping & river bank erosion tracking'
        ],
        standards: 'Water Resources Department (WRD) & Central Water Commission Standards',
        deliverables: ['Canal Profile L-Section Drawings', 'Reservoir Area-Capacity Curves', 'Hydrological Cross-Section Maps', 'Embankment Stability Reports']
      }
    },
    {
      code: 'SEC-04',
      id: 'highways',
      icon: Route,
      title: 'Highways & Roads',
      desc: 'Terrain modeling, road alignment profiling, and cut/fill volume surveys for state and national highways.',
      features: [
        'Road Alignment Surveys',
        'Transportation Planning',
        'Terrain Mapping',
        'Road Corridor Studies'
      ],
      fullDetails: {
        overview: 'Highway development requires fast, highly reliable corridor terrain models. We execute pre-construction alignment surveys, road widening feasibility studies, and precise cut/fill earthwork computations for State and National Highway projects.',
        capabilities: [
          'Corridor DTM creation (100m - 500m right-of-way width)',
          'Pavement cross-section profiling & superelevation layout drafting',
          'Culvert, junction & flyover structural positioning',
          'Earthwork cut and fill quantity optimization for tender preparation'
        ],
        standards: 'Indian Roads Congress (IRC) & NHAI Highway Design Standards',
        deliverables: ['AutoCAD Civil 3D Road Alignment Models', 'Cross-Section & Elevation Profiles', 'Volumetric Earthwork Summaries', 'R.O.W Boundary Demarcation Maps']
      }
    },
    {
      code: 'SEC-05',
      id: 'ports',
      icon: Anchor,
      title: 'Ports & Shipyards',
      desc: 'Coastal mapping, harbor depth surveys, and shipyard structural layout tracking.',
      features: [
        'Coastal Surveys',
        'Port Mapping',
        'Marine Infrastructure',
        'Harbor Engineering'
      ],
      fullDetails: {
        overview: 'Serving major coastal hubs along the eastern seaboard, our team provides marine geospatial support for commercial ports, dockyards, and coastal protection structures. We integrate shoreline topography with harbor structural grid surveys.',
        capabilities: [
          'Coastal shoreline erosion monitoring & high-water line demarcation',
          'Port terminal dock layout & heavy crane rail alignment setting out',
          'Harbor breakwater & jetty structural displacement tracking',
          'Stockpile volume audits for coastal bulk material handling'
        ],
        standards: 'Indian Maritime Board & Ministry of Ports Regulations',
        deliverables: ['Shoreline Topographic Maps', 'Dockyard Crane Rail Tolerance Reports', 'Coastal Structure Alignment Drawings', 'Port Expansion Master Plan Datasets']
      }
    },
    {
      code: 'SEC-06',
      id: 'geospatial',
      icon: Globe,
      title: 'Geospatial Services & GIS',
      desc: 'Remote sensing, thematic map creation, and enterprise spatial data analysis.',
      features: [
        'GIS Mapping',
        'Remote Sensing',
        'Satellite Data Analysis',
        'Spatial Planning'
      ],
      fullDetails: {
        overview: 'Our GIS & Remote Sensing unit transforms complex geographical data into actionable enterprise intelligence. We construct multi-layered GIS databases, analyze satellite imagery, and build spatial decision-support tools for government bodies and corporate clients.',
        capabilities: [
          'Multi-spectral satellite imagery processing & vegetation index analysis',
          'Enterprise Geodatabase creation & web-GIS map server integration',
          'Utility asset mapping (Underground water, gas, power & fiber optic lines)',
          'Spatial buffer analysis for environmental impact assessments'
        ],
        standards: 'Open Geospatial Consortium (OGC) & National Spatial Data Infrastructure',
        deliverables: ['ESRI Shapefiles & File Geodatabases', 'Interactive Web-GIS Dashboard Layers', 'Thematic Environmental Maps', 'Spatial Infrastructure Asset Catalog']
      }
    },
    {
      code: 'SEC-07',
      id: 'power',
      icon: Zap,
      title: 'Transmission Lines & Power',
      desc: 'Power corridor routing, sag analysis, and tower footprint surveys across rough terrains.',
      features: [
        'Power Corridor Mapping',
        'Tower Positioning',
        'Electrical Surveys',
        'Transmission Planning'
      ],
      fullDetails: {
        overview: 'Power transmission lines traverse challenging mountain terrains and agricultural fields. We conduct route selection surveys, tower footprint positioning, conductor clearance verification, and Right-of-Way (RoW) tree-clearing audits.',
        capabilities: [
          'High-voltage transmission line corridor selection & profile plotting',
          'Transmission tower spot location survey & leg extension calculation',
          'Conductor sag clearance check & tree trimming corridor volume audit',
          'Substation site topography & civil foundation layout'
        ],
        standards: 'State Electricity Board & Power Grid Corporation Standards',
        deliverables: ['Tower Schedule & Profile L-Section Drawings', 'Right-of-Way (RoW) Compensation Maps', 'Substation Contour Plans', 'Tower Coordinates & Elevation Tables']
      }
    },
    {
      code: 'SEC-08',
      id: 'mining',
      icon: Mountain,
      title: 'Mine Mapping',
      desc: 'Stockpile measurements, quarry boundary layouts, and safety elevation profile tracking.',
      features: [
        'Mine Surveys',
        'Drone Volume Audits',
        'Volumetric Analysis',
        'Terrain Modeling'
      ],
      fullDetails: {
        overview: 'Mining safety and profitability demand precise volumetric reporting. We provide periodic open-cast mine surveys, quarry pit limit demarcation, overburden calculation, and high-precision stockpile volume audits.',
        capabilities: [
          'Open-cast quarry excavation pit volume tracking & DTM generation',
          'Stockpile volume calculation for granite, limestone, coal & sand',
          'Mine lease boundary demarcation & safety buffer zone verification',
          'High-wall slope angle measurement for mine safety audits'
        ],
        standards: 'Directorate General of Mines Safety (DGMS) Mine Survey Regulations',
        deliverables: ['DGMS Compliant Mine Lease Maps', 'Monthly Quarry Cut/Fill Volumetric Reports', 'High-Density 3D Pit Point Clouds', 'Stockpile Tonnage Calculation Certificates']
      }
    },
    {
      code: 'SEC-09',
      id: 'dronesurvey',
      icon: Scan,
      title: 'Drone Survey & Mapping',
      desc: 'Precision photogrammetric scanning and 3D surface model outputs for development groups.',
      features: [
        'UAV Surveys & LiDAR',
        'Orthophoto Generation',
        '3D Terrain Models',
        'Inspection Services'
      ],
      fullDetails: {
        overview: 'Combining RTK survey drones with LiDAR and high-resolution cameras, we capture rapid aerial survey datasets over hundreds of acres per day. We produce ultra-accurate Orthomosaics and 3D mesh models for rapid planning.',
        capabilities: [
          'RTK GPS aerial photogrammetry & LiDAR point cloud acquisition',
          'Ground control point (GCP) network setup & sub-centimeter georeferencing',
          'Digital Elevation Model (DEM) & Digital Surface Model (DSM) extraction',
          'Structural inspection of high-rise towers, chimneys & bridges'
        ],
        standards: 'DGCA Civil Aviation Requirements (CAR) for Commercial UAV Operations',
        deliverables: ['High-Res Georeferenced Orthomosaic TIFs (GSD < 1.5 cm)', '3D LiDAR Point Clouds (.LAS / .XYZ)', 'Contour DWG Files & DTM Surfaces', 'Structural Thermal & Visual Inspection Reports']
      }
    }
  ];

  const activeSectorData = projectSectors.find(s => s.code === selectedSector);

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        <div className={styles.titleBlock}>
          <div className="badge">Project Domains</div>
          <h2 className={styles.sectionTitle}>Sectors We Service</h2>
          <p className={styles.introText}>
            Our engineering teams deliver precision survey and data solutions across several critical infrastructure sectors. Click any sector to view full technical specifications.
          </p>
        </div>

        <div className={styles.grid}>
          {projectSectors.map((sector, idx) => {
            const Icon = sector.icon;
            return (
              <div 
                key={idx} 
                className={`${styles.projectCard} glass-panel`}
                onClick={() => setSelectedSector(sector.code)}
                style={{ cursor: 'pointer' }}
              >
                <div>
                  <div className={styles.cardHeader}>
                    <div className={styles.iconWrapper}>
                      <Icon size={20} />
                    </div>
                    <span className={styles.projectCode}>{sector.code}</span>
                  </div>
                  <h3 className={styles.projectTitle}>{sector.title}</h3>
                  <p className={styles.projectDesc}>{sector.desc}</p>
                </div>
                
                <ul className={styles.featureList}>
                  {sector.features.map((feat, fIdx) => (
                    <li key={fIdx} className={styles.featureItem}>
                      <span className={styles.bullet} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.exploreLink}>
                  <span>Explore Technical Specs</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Project Sector Modal */}
      {selectedSector && activeSectorData && (
        <div className={styles.modalOverlay} onClick={() => setSelectedSector(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalCloseBtn} onClick={() => setSelectedSector(null)} aria-label="Close Modal">
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span className="badge" style={{ margin: 0 }}>{activeSectorData.code}</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontFamily: 'var(--font-heading)', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 600 }}>
                  Infrastructure Sector Overview
                </span>
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                {activeSectorData.title}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
                {activeSectorData.fullDetails.overview}
              </p>
            </div>

            {/* Sector Switcher Selector */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem' }}>
              {projectSectors.map((s) => (
                <button
                  key={s.code}
                  onClick={() => setSelectedSector(s.code)}
                  style={{
                    padding: '0.4rem 0.85rem',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    cursor: 'pointer',
                    background: s.code === selectedSector ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                    color: s.code === selectedSector ? '#fff' : 'var(--text-secondary)',
                    border: '1px solid',
                    borderColor: s.code === selectedSector ? 'var(--primary)' : 'rgba(255,255,255,0.1)',
                    transition: 'all 0.2s',
                  }}
                >
                  {s.code}: {s.title.split('&')[0].trim()}
                </button>
              ))}
            </div>

            {/* Specs Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
              {/* Technical Scope & Capabilities */}
              <div style={{ background: 'rgba(20, 20, 20, 0.6)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h4 style={{ color: 'var(--primary)', fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Cpu size={18} /> Sector Engineering Capabilities
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {activeSectorData.fullDetails.capabilities.map((item, idx) => (
                    <li key={idx} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.75rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Standard Deliverables */}
              <div style={{ background: 'rgba(20, 20, 20, 0.6)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h4 style={{ color: '#ffffff', fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={18} /> Standard Client Outputs
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {activeSectorData.fullDetails.deliverables.map((item, idx) => (
                    <li key={idx} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.75rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                      <CheckCircle2 size={16} style={{ color: '#28a745', flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Standards & Compliance */}
            <div style={{ background: 'rgba(211, 18, 17, 0.08)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(211, 18, 17, 0.2)', marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, marginBottom: '0.25rem' }}>
                Regulatory Compliance Code
              </div>
              <div style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                {activeSectorData.fullDetails.standards}
              </div>
            </div>

            {/* Footer Action */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
              <button className="btn btn-secondary" onClick={() => setSelectedSector(null)}>
                Close
              </button>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setSelectedSector(null);
                  if (onNavigate) onNavigate('contact');
                }}
              >
                Consult Our Engineers
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
