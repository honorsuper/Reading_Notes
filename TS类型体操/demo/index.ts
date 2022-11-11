{
  type GetParameters<Fn extends Function> = Fn extends (
    ...args: infer T
  ) => unknown
    ? T
    : never;

  type F = GetParameters<(name: string) => string>;
}
{
  type GetReturnType<Fn extends Function> = Fn extends (
    ...args: any[]
  ) => infer T
    ? T
    : never;

  type F = GetReturnType<(name: string) => string>;
}
