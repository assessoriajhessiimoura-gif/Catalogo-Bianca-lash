# Bianca Moura - Lash Designer

Site profissional responsivo para Bianca Moura, especialista em alongamento de cílios (Lash Designer).

## Características

- Design responsivo e mobile-first
- Paleta de cores elegante (Rosa nude, Bege champanhe, Capuccino, Cinza porcelana)
- Animações suaves e efeitos de balanço
- Galeria interativa de procedimentos
- Integração direta com WhatsApp para agendamentos
- Otimizado para SEO
- Performance e carregamento rápido

## Estrutura do Projeto

```
project/
├── public/
│   └── images/              # Fotos da profissional e procedimentos
├── src/
│   ├── App.tsx             # Componente principal com todas as seções
│   ├── index.css           # Estilos e animações personalizadas
│   └── main.tsx            # Ponto de entrada da aplicação
├── index.html              # HTML principal
└── package.json            # Dependências do projeto
```

## Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Biblioteca de ícones

## Instalação e Execução

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Passos para rodar localmente

1. Instale as dependências:
```bash
npm install
```

2. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

3. Acesse no navegador:
```
http://localhost:5173
```

### Build para produção

Para gerar os arquivos otimizados para deploy:

```bash
npm run build
```

Os arquivos compilados estarão na pasta `dist/`.

## Deploy no Netlify

### Opção 1: Deploy via Interface do Netlify

1. Acesse [Netlify](https://www.netlify.com/)
2. Faça login ou crie uma conta
3. Clique em "Add new site" > "Import an existing project"
4. Conecte seu repositório GitHub
5. Configure as opções de build:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Clique em "Deploy site"

### Opção 2: Deploy via Netlify CLI

```bash
# Instalar Netlify CLI globalmente
npm install -g netlify-cli

# Fazer login
netlify login

# Fazer build
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

### Opção 3: Deploy via Arrastar e Soltar

1. Execute `npm run build`
2. Acesse [Netlify Drop](https://app.netlify.com/drop)
3. Arraste a pasta `dist` para a área indicada

## Deploy no GitHub Pages

1. Instale o pacote gh-pages:
```bash
npm install -D gh-pages
```

2. Adicione ao `package.json`:
```json
{
  "homepage": "https://seu-usuario.github.io/nome-do-repositorio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Configure o Vite adicionando ao `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/nome-do-repositorio/',
  // ... resto da configuração
});
```

4. Faça o deploy:
```bash
npm run deploy
```

## Seções do Site

### 1. Seção Inicial
- Foto da profissional
- Apresentação e descrição dos serviços
- Badge de certificação

### 2. Catálogo de Procedimentos
- Grid responsivo com 6 procedimentos
- Efeitos de hover e animações
- Modal para visualização ampliada das imagens
- Preços claramente exibidos

### 3. Manutenção
- Informações sobre manutenções regulares
- Preços das manutenções
- Foto de exemplo

### 4. Agendamento
- Formulário de seleção de procedimento
- Botão de WhatsApp com mensagem pré-formatada
- Integração direta com WhatsApp Business

### 5. Footer
- Informações de contato
- Links para redes sociais
- Copyright

## Personalização

### Alterar Cores

As cores principais estão configuradas usando classes do Tailwind CSS no arquivo `App.tsx`. Para alterar:

- **Dourado:** `amber-600`, `amber-700`, `amber-400`
- **Rosa/Nude:** `rose-50`, `rose-100`
- **Bege:** `stone-50`, `stone-100`
- **Cinza:** `neutral-100`, `neutral-800`

### Adicionar/Remover Procedimentos

Edite o array `procedures` no arquivo `src/App.tsx`:

```typescript
const procedures: Procedure[] = [
  { name: 'Nome do Procedimento', price: 'R$ 000,00', image: '/images/foto.jpeg' },
  // Adicione mais procedimentos aqui
];
```

### Alterar Número do WhatsApp

No arquivo `src/App.tsx`, localize a função `handleWhatsAppClick()` e altere o número:

```typescript
window.open(`https://wa.me/5531991028853?text=${message}`, '_blank');
```

### Adicionar Novas Imagens

1. Coloque as imagens na pasta `public/images/`
2. Referencie no código usando o caminho: `/images/nome-da-imagem.jpeg`

## Otimizações SEO

O site já inclui:
- Meta tags otimizadas (description, keywords, author)
- Título descritivo
- Estrutura semântica HTML5
- Alt text em todas as imagens
- URLs amigáveis

Para melhorar ainda mais:
1. Adicione um arquivo `sitemap.xml`
2. Configure `robots.txt`
3. Adicione Google Analytics
4. Configure Open Graph tags para redes sociais

## Suporte e Manutenção

Para adicionar novas funcionalidades ou fazer alterações:

1. **Verificar tipos:** `npm run typecheck`
2. **Lint do código:** `npm run lint`
3. **Preview da build:** `npm run preview`

## Licença

Este projeto foi desenvolvido para uso exclusivo de Bianca Moura - Lash Designer.

## Contato

Para dúvidas ou suporte técnico, entre em contato através do WhatsApp: (31) 9 9102-8853
