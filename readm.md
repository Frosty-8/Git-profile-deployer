frosty-design-studio/
│
├── apps/
│   │
│   ├── frontend/                    
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── features/
│   │   │   │   ├── dashboard/
│   │   │   │   ├── designs/
│   │   │   │   ├── editor/
│   │   │   │   ├── preview/
│   │   │   │   └── export/
│   │   │   ├── layouts/
│   │   │   ├── hooks/
│   │   │   ├── lib/
│   │   │   ├── services/
│   │   │   ├── stores/
│   │   │   ├── types/
│   │   │   ├── App.tsx
│   │   │   └── main.tsx
│   │   ├── public/
│   │   ├── index.html
│   │   ├── package.json
│   │   └── vite.config.ts
│   │
│   └── backend/                     
│       ├── src/
│       │   ├── config/
│       │   │   ├── env.ts
│       │   │   └── constants.ts
│       │   │
│       │   ├── routes/
│       │   │   ├── health.ts
│       │   │   ├── profile.ts
│       │   │   ├── designs.ts
│       │   │   ├── render.ts
│       │   │   └── export.ts
│       │   │
│       │   ├── controllers/
│       │   │   ├── profile.controller.ts
│       │   │   ├── design.controller.ts
│       │   │   ├── render.controller.ts
│       │   │   └── export.controller.ts
│       │   │
│       │   ├── services/
│       │   │   ├── github.service.ts
│       │   │   ├── profile.service.ts
│       │   │   ├── design.service.ts
│       │   │   ├── render.service.ts
│       │   │   └── cache.service.ts
│       │   │
│       │   ├── adapters/
│       │   │   └── github.adapter.ts
│       │   │
│       │   ├── designs/
│       │   │   ├── registry.ts
│       │   │   ├── types.ts
│       │   │   └── loader.ts
│       │   │
│       │   ├── renderer/
│       │   │   ├── svg/
│       │   │   │   ├── primitives.ts
│       │   │   │   ├── gradients.ts
│       │   │   │   ├── effects.ts
│       │   │   │   └── utils.ts
│       │   │   ├── components/
│       │   │   └── engine.ts
│       │   │
│       │   ├── schemas/
│       │   │   ├── profile.schema.ts
│       │   │   ├── design.schema.ts
│       │   │   └── render.schema.ts
│       │   │
│       │   ├── middleware/
│       │   │   ├── error-handler.ts
│       │   │   ├── logger.ts
│       │   │   └── cors.ts
│       │   │
│       │   ├── utils/
│       │   ├── app.ts
│       │   └── server.ts
│       │
│       ├── tests/
│       ├── package.json
│       └── tsconfig.json
│
├── packages/
│   ├── shared-types/                 
│   │   └── src/
│   │       ├── profile.ts
│   │       ├── design.ts
│   │       ├── render.ts
│   │       └── index.ts
│   │
│   └── design-core/                  
│       └── src/
│           ├── components/
│           ├── themes/
│           ├── layouts/
│           ├── effects/
│           └── index.ts
│
├── designs/
│   ├── retro-city/
│   │   ├── manifest.json
│   │   ├── theme.json
│   │   ├── preview.svg
│   │   └── design.ts
│   │
│   ├── cyber-terminal/
│   ├── aurora/
│   ├── minimal-editorial/
│   └── pixel-developer/
│
├── docs/
│   ├── architecture.md
│   └── design-sdk.md
│
├── .env.example
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── package.json
├── pnpm-workspace.yaml
└── README.md