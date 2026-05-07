import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://xadev.wiki',
  integrations: [
    starlight({
      title: 'xAdEv',
      description: 'Explorar · Adaptar · Evolucionar — Modelo abierto de transformación organizacional',
      defaultLocale: 'es',
      locales: {
        root: { label: 'Español', lang: 'es' },
      },
      logo: {
        src: './public/logo.svg',
        replacesTitle: true,
      },
      favicon: '/favicon.svg',
      customCss: ['./src/styles/custom.css'],
      social: {
        github: 'https://github.com/adaptant/xadev',
      },
      editLink: {
        baseUrl: 'https://xadev.wiki/doku.php/',
      },
      lastUpdated: true,
      sidebar: [
        {
          label: 'Inicio',
          items: [
            { label: 'Inicio', link: '/' },
            { label: 'Feedback y colaboración', slug: 'feedback' },
          ],
        },
        {
          label: 'Introducción y Contexto',
          collapsed: false,
          items: [
            { label: 'Ecosistema de las Organizaciones', slug: 'intro/ecosistema' },
            { label: 'Estructuras para la evolución', slug: 'intro/estructuras' },
            { label: 'Organizaciones Adaptativas', slug: 'intro/org-adaptativas' },
            { label: 'Evolución basada en Principios', slug: 'intro/principios' },
            { label: 'Empresas Antifrágiles', slug: 'intro/antifragil' },
            { label: 'Fluidez vs. Eficiencia', slug: 'intro/fluidez' },
            { label: 'Habilitadores de la Evolución', slug: 'intro/habilitadores' },
            { label: 'La Organización Actual', slug: 'intro/org-actual' },
          ],
        },
        {
          label: 'Ciclos de Retroalimentación',
          collapsed: false,
          items: [
            { label: 'Centro y Periferia', slug: 'ciclos/centro-periferia' },
            { label: 'Explorar · Adaptar · Evolucionar', slug: 'ciclos/exp-ada-evo' },
            { label: 'Meta Ciclos', slug: 'ciclos/meta-ciclos' },
          ],
        },
        {
          label: 'Exploración, Adaptación y Evolución',
          collapsed: false,
          items: [
            { label: 'Open Spaces de Exploración', slug: 'evolucion/open-spaces-exploracion' },
            { label: 'Open Spaces de Adaptación', slug: 'evolucion/open-spaces-adaptacion' },
            { label: 'Ciclo de Evolución: 10 Pasos', slug: 'evolucion/10-pasos' },
          ],
        },
        {
          label: 'Equipos y Roles',
          collapsed: false,
          items: [
            { label: 'Periferia y Centro', slug: 'equipos/periferia-centro' },
            { label: 'Detalle de Equipos y Roles', slug: 'equipos/detalle' },
            { label: 'Impacto en Habilitadores', slug: 'equipos/habilitadores' },
            { label: 'Ciclo de vida: Adopting Team', slug: 'equipos/adopting-team' },
            { label: 'Ciclo de vida: Mission Team', slug: 'equipos/mission-team' },
          ],
        },
        {
          label: 'Onboarding Team',
          collapsed: false,
          items: [
            { label: 'Onboarding de Personas', slug: 'onboarding/onboarding-personas' },
            { label: 'Ciclo de vida del Onboarding Team', slug: 'onboarding/ciclo-vida' },
            { label: 'Coexistencia de modelos', slug: 'onboarding/coexistencia' },
            { label: 'Temores y Problemas comunes', slug: 'onboarding/temores' },
          ],
        },
        {
          label: 'Tecnología con Propósito',
          collapsed: true,
          items: [
            { label: 'Tecnología con Propósito', slug: 'tecnologia/intro' },
            { label: 'Automatización — A4P', slug: 'tecnologia/a4p' },
            { label: 'Inteligencia Artificial — IA4P', slug: 'tecnologia/ia4p' },
          ],
        },
        {
          label: 'Disrupciones y Fuentes',
          collapsed: true,
          items: [
            { label: 'Irritaciones Constructivas', slug: 'fuentes/irritaciones' },
            { label: 'Referencias Bibliográficas', slug: 'fuentes/referencias' },
            { label: 'Comparación con SAFe', slug: 'fuentes/safe' },
            { label: 'Cultura legada: Cargo Cult', slug: 'fuentes/cargo-cult' },
            { label: 'Autoevaluación cultural', slug: 'fuentes/autoevaluacion' },
            { label: 'Team Topologies: Referencias', slug: 'fuentes/team-topologies-ref' },
            { label: 'Team Topologies: El libro', slug: 'fuentes/team-topologies-libro' },
            { label: 'Mandos Medios', slug: 'fuentes/mandos-medios' },
            { label: 'Vacas Sagradas: Game Over', slug: 'fuentes/vacas-sagradas' },
            { label: 'El Korbut flip', slug: 'fuentes/korbut-flip' },
          ],
        },
        {
          label: 'Aprendizajes y Adopción',
          collapsed: true,
          items: [
            { label: 'Manifiesto Ágil: Historia', slug: 'aprendizajes/manifiesto-agil' },
            { label: 'Principios BetaCodex', slug: 'aprendizajes/betacodex-principios' },
            { label: 'Empresas con modelos adaptativos', slug: 'aprendizajes/empresas-teal' },
            { label: 'Ciclo anual de cuatro trimestres', slug: 'aprendizajes/ciclo-anual' },
            { label: 'Asignación de Roles (UnFix)', slug: 'aprendizajes/asignacion-roles' },
            { label: 'Patrones y Anti-Patrones', slug: 'aprendizajes/patrones' },
            { label: 'FAQ', slug: 'aprendizajes/faq' },
            { label: 'Ensayo: Medir el desempeño', slug: 'aprendizajes/medir-desempeno' },
          ],
        },
        {
          label: 'Recursos',
          collapsed: true,
          items: [
            { label: 'Videos recomendados', slug: 'recursos/videos' },
            { label: 'Papers e Investigaciones', slug: 'recursos/papers' },
          ],
        },
      ],
    }),
  ],
});
