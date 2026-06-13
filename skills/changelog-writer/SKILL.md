---
name: changelog-writer
description: Use ao transformar uma lista de commits (Conventional Commits) em uma entrada de CHANGELOG legível para humanos, agrupada por tipo.
---

# Changelog Writer

## Quando usar
- Quando há um intervalo de commits/PRs e é preciso publicar uma nota de release.
- Quando os commits seguem Conventional Commits (`feat:`, `fix:`, `docs:`, ...).

## Como executar
1. Receba a lista de commits (mensagem + hash curto).
2. Agrupe por tipo: Features, Fixes, Docs, Internas.
3. Reescreva cada item em linguagem orientada ao usuário (o benefício, não o detalhe interno).
4. Descarte ruído (merges, bumps triviais) a menos que sejam relevantes.
5. Produza Markdown sob um cabeçalho de versão/data.

## Entradas / Saídas
- **Entrada**: lista de commits + número da versão + data.
- **Saída**: bloco Markdown pronto para colar no `CHANGELOG.md`.

## Exemplo
```text
Entrada:
  feat(api): add pagination to /users
  fix(auth): handle expired token refresh

Saída:
  ## [1.4.0] - 2026-06-13
  ### Adicionado
  - Paginação no endpoint de usuários.
  ### Corrigido
  - Renovação de token expirado deixou de falhar silenciosamente.
```
