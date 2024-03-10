import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

type TaskLayoutProps = {
  children?: React.ReactNode
}

export function TaskLayout(props: TaskLayoutProps) {
  return (
    <div className="container ">
      <section className="grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2 font-bold">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Pokedex with PokeAPI
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            PokeAPI provides info about all 1302 pokemons
          </p>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Using PokeAPI we are going to try to implement a small pokedex that
            contains:
          </p>
          <ul className="ml-6 max-w-[700px] list-disc text-lg text-muted-foreground [&>li]:mt-2">
            <li>Lists the first 20 pokemons names</li>
            <li>Add a picture to each pokemon list item</li>
          </ul>
        </div>
        <div className="flex">
          <Link
            href="https://pokeapi.co/docs/v2#pokemon"
            target="_blank"
            rel="noreferrer"
            className={buttonVariants()}
          >
            PokeAPI Documentation
          </Link>
        </div>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          The template provides a starting point for your task. You can use it.
          You can also delete it and start from scratch. You can add any
          libraries you want. You can use any tools you want. You can use any
          styling you want. You can use any state management you want. You can
          use any CSS framework you want. You can use any build tool you want.
        </p>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          The template provides setup for some popular tools so that they are
          available to you:
        </p>
        <ul className="my-6 ml-6 max-w-[700px] list-disc text-lg [&>li]:mt-2">
          <li>
            <a href="https://nextjs.org/docs">Nextjs</a>
          </li>
          <li>
            <a href="https://tailwindcss.com/docs/installation">Tailwindcss</a>
          </li>
          <li>
            <a href="https://ui.shadcn.com/docs">Shadcn UI components</a>{" "}
          </li>
          <li>
            <a href="https://tanstack.com/query/v5/docs/react/overview">
              React Query Version 5
            </a>
          </li>
        </ul>
      </section>
      <section>{props.children}</section>
    </div>
  )
}
