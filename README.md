# Cosmospay-api

[![Update chains in cosmos.config.json](https://github.com/BitCannaGlobal/Cosmos-Pay/actions/workflows/main.yml/badge.svg)](https://github.com/BitCannaGlobal/Cosmos-Pay/actions/workflows/main.yml)

This repo allows to automatically update RPC/LCD url from chain registry.

## Add your chain

1. Fork this repo to your own github account
2. Clone fork and create new branch

```
git clone https://github.com/BitCannaGlobal/cosmospay-api.git
cd cosmospay-api/
git branch <your_branch_name>
git checkout <your_branch_name>
nano cosmos.config.json
```

3. Edit cosmos.config.json and add your own config.
4. Commit and push to your fork

```
git add cosmos.config.json
git commit -m "Add <your_chain>"
git push origin <your_branch_name>
```

5. From your repository, make pull requesrt (PR)

The team will contact you with respect to the listing in the plugin


