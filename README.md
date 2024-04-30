**Benchmarking Next.js Build Performance**

This project aims to provide a realistic Next.js workload for benchmarking build performance across different operating systems.

**Prerequisites:**

- Node.js

**Installation:**

```bash
pnpm install
```

**Benchmarking**

1.  Ensure dependencies are installed (`npm install`).
2.  Use the following command to measure build time:

    ```bash
    time pnpm build
    ```

3.  Run the command **multiple times on each operating system** to gather consistent data.
4.  **Record the following:**
    - Operating System (include version)
    - Hardware Specifications (CPU, RAM)
    - Node.js Version
    - Individual Build Times

**4. Contributing Data**

Let's encourage participation! Add a section titled:

```markdown
**How to Contribute**

If you'd like to help expand our benchmark dataset, please run the project on your own hardware, gather the benchmark data, and [open an issue](https://github.com/TheMaroonHatHacker/pokedex-benchmark-project/issues) on this repository to report your findings.
```
