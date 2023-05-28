type Primitive = string | number | symbol | BigInt | boolean | undefined | null;

type ValueMatchesExpected<T, U, Y = unknown, N = never> = () => T extends U ? Y : N

const sym = Symbol();
type IsPossiblePrimitive1 = ValueMatchesExpected<null, Primitive, true, false>; // true
type IsPossiblePrimitive2 = ValueMatchesExpected<50, Primitive, true, false>; // true
type IsPossiblePrimitive3 = ValueMatchesExpected<'Hello', Primitive, true, false>; // true
type IsPossiblePrimitive4 = ValueMatchesExpected<false, Primitive, true, false>; // true
type IsPossiblePrimitive5 = ValueMatchesExpected<typeof sym, Primitive, true, false>; // true
type IsPossiblePrimitive6 = ValueMatchesExpected<[], Primitive, true, false>; // false