import { lazy, LazyExoticComponent } from 'react';

// Route type definition
export type Route = 'home' | 'mindstudio' | 'wenia' | 'treez' | 'nacional' | 'klare';

// Lazy load case study components for better performance
const MindStudioCaseStudy = lazy(() => import('../components/case-studies/MindStudioCaseStudy'));
const WeniaCaseStudy = lazy(() => import('../components/case-studies/WeniaCaseStudy'));
const TreezCaseStudy = lazy(() => import('../components/case-studies/TreezCaseStudy'));
const NacionalCaseStudy = lazy(() => import('../components/case-studies/NacionalCaseStudy'));
const KlareCaseStudy = lazy(() => import('../components/case-studies/KlareCaseStudy'));

// Route configuration interface
export interface RouteConfig {
  path: string;
  component?: LazyExoticComponent<() => JSX.Element>;
  label: string;
}

// Route configuration object
export const ROUTES: Record<Route, RouteConfig> = {
  home: {
    path: '/',
    label: 'Home',
  },
  mindstudio: {
    path: '/mindstudio',
    component: MindStudioCaseStudy,
    label: 'MindStudio',
  },
  wenia: {
    path: '/wenia',
    component: WeniaCaseStudy,
    label: 'Wenia',
  },
  treez: {
    path: '/treez',
    component: TreezCaseStudy,
    label: 'Treez',
  },
  nacional: {
    path: '/nacional',
    component: NacionalCaseStudy,
    label: 'Nacional',
  },
  klare: {
    path: '/klare',
    component: KlareCaseStudy,
    label: 'Klare',
  },
};

// Valid route keys for validation
export const VALID_ROUTES: Route[] = ['mindstudio', 'wenia', 'treez', 'nacional', 'klare'];
