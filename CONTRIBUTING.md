# Guia de Contribuição

Obrigado por considerar contribuir com o **AI Playbook**! Este repositório vive de artefatos práticos e bem documentados. Este guia explica como adicionar os seus.

## Princípios

- **Autocontido**: cada artefato deve funcionar sozinho, com pré-requisitos claros.
- **Testado**: compartilhe apenas o que você já usou de verdade.
- **Documentado**: todo artefato tem um cabeçalho com propósito, entradas e saídas esperadas.
- **Neutro de provedor quando possível**: indique se algo é específico de um modelo/runtime.

## Idioma

- **Documentação** (README, guias): Português (BR).
- **Código, nomes de arquivos e identificadores técnicos**: Inglês.
- **Commits**: Inglês, seguindo [Conventional Commits](https://www.conventionalcommits.org/).

## Passo a passo

1. Faça um fork e crie uma branch: `feat/<categoria>-<nome-curto>`.
2. Coloque o artefato na pasta correta (`prompts/`, `agents/`, `skills/`, `mcp/`, `evals/`, `examples/`).
3. Siga o **template** da categoria (veja o `README.md` da pasta).
4. Atualize o índice no `README.md` da pasta, se houver.
5. Rode o lint local, se aplicável.
6. Abra um Pull Request usando o template e descreva o caso de uso.

## Formato dos commits

```
feat(prompts): add code-review system prompt
fix(agents): correct tool schema in researcher agent
docs(mcp): clarify auth setup for filesystem server
```

## Checklist do PR

- [ ] O artefato está na pasta certa e segue o template da categoria.
- [ ] Cabeçalho/README preenchido (propósito, pré-requisitos, exemplo de uso).
- [ ] Sem segredos, tokens ou dados sensíveis.
- [ ] Testei o artefato pelo menos uma vez.

Dúvidas? Abra uma issue. 🚀
