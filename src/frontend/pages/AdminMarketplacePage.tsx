import React, { useEffect } from 'react';
import { useStyleBlock } from '../lib/useStyleBlock';

export default function AdminMarketplacePage() {
  useEffect(() => {
    document.title = 'Contextra - Admin Marketplace';
  }, []);

  useStyleBlock(`
        .material-symbols-outlined {
            font-family: 'Material Symbols Outlined';
            font-weight: normal;
            font-style: normal;
            font-size: 24px;
            line-height: 1;
            letter-spacing: normal;
            text-transform: none;
            display: inline-block;
            white-space: nowrap;
            word-wrap: normal;
            direction: ltr;
            font-feature-settings: 'liga';
            -webkit-font-smoothing: antialiased;
        }
    `);

  return (
    <div className="bg-background text-on-surface antialiased flex h-screen overflow-hidden selection:bg-secondary-container selection:text-on-secondary-container w-full min-h-screen">
      
      
{/* Shared Component: SideNavBar */}
<nav className="bg-surface-container-low text-primary h-screen w-64 left-0 fixed border-r border-outline-variant/30 flex flex-col py-8 px-4 z-40">
<div className="mb-12 px-2 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary font-headline-md text-headline-md shadow-sm">
                C
            </div>
<div>
<h2 className="font-headline-md text-headline-md text-on-surface leading-tight tracking-tight">Contextra</h2>
<p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mt-0.5 opacity-80">Intelligence Workspace</p>
</div>
</div>
<ul className="flex-1 space-y-2">
{/* No active tab matches "Admin Console", all use inactive style */}
<li>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 transition-all duration-200 font-body-md text-body-md group" href="#">
<span className="material-symbols-outlined text-[20px] opacity-70 group-hover:opacity-100 transition-opacity" data-icon="analytics">analytics</span>
                    Intelligence Canvas
                </a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 transition-all duration-200 font-body-md text-body-md group" href="#">
<span className="material-symbols-outlined text-[20px] opacity-70 group-hover:opacity-100 transition-opacity" data-icon="hub">hub</span>
                    Knowledge Constellation
                </a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 transition-all duration-200 font-body-md text-body-md group" href="#">
<span className="material-symbols-outlined text-[20px] opacity-70 group-hover:opacity-100 transition-opacity" data-icon="inventory_2">inventory_2</span>
                    Source Hub
                </a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 transition-all duration-200 font-body-md text-body-md group" href="#">
<span className="material-symbols-outlined text-[20px] opacity-70 group-hover:opacity-100 transition-opacity" data-icon="auto_awesome">auto_awesome</span>
                    Synthesis Studio
                </a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 transition-all duration-200 font-body-md text-body-md group" href="#">
<span className="material-symbols-outlined text-[20px] opacity-70 group-hover:opacity-100 transition-opacity" data-icon="history">history</span>
                    Memory Timeline
                </a>
</li>
</ul>
<div className="mt-auto pt-6 border-t border-outline-variant/30">
<button className="w-full py-3 px-4 bg-surface text-on-surface border border-outline-variant/50 hover:bg-surface-variant transition-colors duration-200 rounded-lg flex items-center justify-center gap-2 font-body-md text-body-md shadow-sm">
<span className="material-symbols-outlined text-[18px]" data-icon="add">add</span>
                New Synthesis
            </button>
</div>
</nav>
{/* Main Content Area (Split View) */}
<main className="ml-64 flex-1 flex h-full">
{/* Left Pane: Admin Controls */}
<section className="w-1/2 h-full bg-background border-r border-outline-variant/30 overflow-y-auto px-12 py-16 flex flex-col relative">
<header className="mb-12">
<p className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-2">Enterprise Control</p>
<h1 className="font-headline-lg text-headline-lg text-on-surface">Admin Console</h1>
</header>
<div className="space-y-10">
{/* Analytics Section */}
<div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-[22px] text-tertiary" data-icon="monitoring">monitoring</span>
                        System Analytics
                    </h3>
<div className="grid grid-cols-2 gap-6">
<div className="bg-surface/60 backdrop-blur-xl border border-surface-variant p-6 rounded-xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/30 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
<p className="font-mono-ui text-mono-ui text-on-surface-variant mb-2">Compute Units Utilized</p>
<p className="font-headline-lg text-headline-lg text-on-surface tracking-tight">24,592</p>
<div className="mt-4 flex items-center gap-1 text-sm font-body-md text-tertiary">
<span className="material-symbols-outlined text-[16px]" data-icon="trending_up">trending_up</span>
<span>+12% vs last week</span>
</div>
</div>
<div className="bg-surface/60 backdrop-blur-xl border border-surface-variant p-6 rounded-xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/40 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
<p className="font-mono-ui text-mono-ui text-on-surface-variant mb-2">Active Syntheses</p>
<p className="font-headline-lg text-headline-lg text-on-surface tracking-tight">1,840</p>
<div className="mt-4 flex items-center gap-1 text-sm font-body-md text-on-surface-variant">
<span className="material-symbols-outlined text-[16px]" data-icon="horizontal_rule">horizontal_rule</span>
<span>Stable output</span>
</div>
</div>
</div>
</div>
{/* User Permissions */}
<div>
<div className="flex items-center justify-between mb-6">
<h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-[22px] text-tertiary" data-icon="group">group</span>
                            Access Control
                        </h3>
<button className="font-mono-ui text-mono-ui text-primary hover:text-on-surface transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]" data-icon="tune">tune</span>
                            Manage Roles
                        </button>
</div>
<div className="bg-surface rounded-xl border border-outline-variant/30 overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container border-b border-outline-variant/30">
<th className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider py-3 px-4 font-normal">User</th>
<th className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider py-3 px-4 font-normal">Role</th>
<th className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider py-3 px-4 font-normal text-right">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/20 font-body-md text-body-md">
<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-4 px-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center font-mono-ui text-xs">AS</div>
<span className="text-on-surface">Alice Sterling</span>
</td>
<td className="py-4 px-4 text-on-surface-variant">Lead Researcher</td>
<td className="py-4 px-4 text-right">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#e8f5e9] text-[#2e7d32] text-xs font-mono-ui">
<span className="w-1.5 h-1.5 rounded-full bg-[#2e7d32]"></span> Active
                                        </span>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-4 px-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-mono-ui text-xs">MK</div>
<span className="text-on-surface">Marcus Vance</span>
</td>
<td className="py-4 px-4 text-on-surface-variant">Analyst Tier 2</td>
<td className="py-4 px-4 text-right">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#e8f5e9] text-[#2e7d32] text-xs font-mono-ui">
<span className="w-1.5 h-1.5 rounded-full bg-[#2e7d32]"></span> Active
                                        </span>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-4 px-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center font-mono-ui text-xs">EJ</div>
<span className="text-on-surface">Elena Rostova</span>
</td>
<td className="py-4 px-4 text-on-surface-variant">External Consultant</td>
<td className="py-4 px-4 text-right">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-variant text-on-surface-variant text-xs font-mono-ui">
<span className="w-1.5 h-1.5 rounded-full bg-on-surface-variant"></span> Revoked
                                        </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>
{/* Right Pane: Marketplace */}
<section className="w-1/2 h-full bg-surface-container-low overflow-y-auto px-12 py-16">
<header className="mb-12 flex items-end justify-between">
<div>
<p className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-2">Knowledge Assets</p>
<h1 className="font-headline-lg text-headline-lg text-on-surface">Template Marketplace</h1>
</div>
<div className="relative w-64">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant" data-icon="search">search</span>
<input className="w-full bg-surface border border-outline-variant/50 rounded-full py-2.5 pl-10 pr-4 font-body-md text-body-md text-on-surface focus:outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-all placeholder:text-on-surface-variant/50" placeholder="Search templates..." type="text"/>
</div>
</header>
{/* Bento Grid Marketplace */}
<div className="grid grid-cols-2 gap-6">
{/* Card 1: Investigation Framework */}
<div className="col-span-2 bg-surface rounded-xl border border-outline-variant/30 p-6 shadow-sm hover:shadow-md hover:border-tertiary/40 transition-all cursor-pointer group flex gap-6">
<div className="w-32 h-32 rounded-lg bg-surface-variant flex-shrink-0 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-tertiary-container to-surface-variant opacity-80"></div>
<span className="material-symbols-outlined absolute inset-0 m-auto w-fit h-fit text-[40px] text-tertiary/40" data-icon="account_tree">account_tree</span>
</div>
<div className="flex flex-col justify-between py-1">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="bg-tertiary-container text-on-tertiary-container px-2 py-0.5 rounded text-xs font-mono-ui">Enterprise</span>
<span className="text-on-surface-variant text-sm font-body-md flex items-center gap-1"><span className="material-symbols-outlined text-[14px]" data-icon="download">download</span> 1.2k uses</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-tertiary transition-colors mb-1">Deep Investigation Framework</h3>
<p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">A comprehensive ontological structure for tracing corporate ownership, analyzing shell company structures, and mapping executive networks over temporal nodes.</p>
</div>
<div className="mt-4 flex items-center gap-3">
<button className="bg-on-surface text-surface px-4 py-1.5 rounded-lg font-body-md text-sm hover:bg-on-surface/90 transition-colors">Install Template</button>
<span className="font-mono-ui text-mono-ui text-on-surface-variant">v2.4.0</span>
</div>
</div>
</div>
{/* Card 2: Startup Kit */}
<div className="bg-surface rounded-xl border border-outline-variant/30 p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all cursor-pointer group flex flex-col h-full">
<div className="w-full h-32 rounded-lg bg-surface-variant mb-5 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-secondary-container to-surface-variant opacity-60"></div>
<span className="material-symbols-outlined absolute inset-0 m-auto w-fit h-fit text-[40px] text-secondary/40" data-icon="rocket_launch">rocket_launch</span>
</div>
<div className="flex-1">
<span className="text-on-surface-variant text-xs font-mono-ui block mb-2 uppercase tracking-wider">Research Kit</span>
<h3 className="font-body-lg text-body-lg text-on-surface group-hover:text-primary transition-colors font-semibold mb-2">Startup Due Diligence</h3>
<p className="font-body-md text-body-md text-on-surface-variant text-sm leading-relaxed mb-4">Structured memory nodes for extracting founder history, cap table analysis, and market sizing models.</p>
</div>
<div className="pt-4 border-t border-outline-variant/20 flex justify-between items-center mt-auto">
<span className="font-mono-ui text-mono-ui text-on-surface-variant text-xs">8 Modules</span>
<span className="material-symbols-outlined text-[20px] text-primary" data-icon="add_circle">add_circle</span>
</div>
</div>
{/* Card 3: Market Analysis */}
<div className="bg-surface rounded-xl border border-outline-variant/30 p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all cursor-pointer group flex flex-col h-full">
<div className="w-full h-32 rounded-lg bg-surface-variant mb-5 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#f3e5f5] to-surface-variant opacity-60"></div>
<span className="material-symbols-outlined absolute inset-0 m-auto w-fit h-fit text-[40px] text-tertiary/30" data-icon="pie_chart">pie_chart</span>
</div>
<div className="flex-1">
<span className="text-on-surface-variant text-xs font-mono-ui block mb-2 uppercase tracking-wider">Framework</span>
<h3 className="font-body-lg text-body-lg text-on-surface group-hover:text-primary transition-colors font-semibold mb-2">Macro Trend Synthesizer</h3>
<p className="font-body-md text-body-md text-on-surface-variant text-sm leading-relaxed mb-4">Automatically ingests vast swathes of regulatory filings to isolate emergent technological trends.</p>
</div>
<div className="pt-4 border-t border-outline-variant/20 flex justify-between items-center mt-auto">
<span className="font-mono-ui text-mono-ui text-on-surface-variant text-xs">4 Modules</span>
<span className="material-symbols-outlined text-[20px] text-primary" data-icon="add_circle">add_circle</span>
</div>
</div>
</div>
</section>
</main>

    </div>
  );
}
