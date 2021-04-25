# weedize

Create GitHub weed layout.
It is [[Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday],[Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday],...] in a year from start date.

## how to use

```ts
import { weedize } from "weedize";

const layout = weedize(new Date("2021-01-01"));

consoel.log(layout);
```

```js
[
  [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    new Date("2021-01-01T00:00:00.000Z"),
    new Date("2021-01-02T00:00:00.000Z"),
  ],
  [
    new Date("2021-01-03T00:00:00.000Z"),
    new Date("2021-01-04T00:00:00.000Z"),
    new Date("2021-01-05T00:00:00.000Z"),
    new Date("2021-01-06T00:00:00.000Z"),
    new Date("2021-01-07T00:00:00.000Z"),
    new Date("2021-01-08T00:00:00.000Z"),
    new Date("2021-01-09T00:00:00.000Z"),
  ],
  ,...,
  [
    new Date("2021-12-26T00:00:00.000Z"),
    new Date("2021-12-27T00:00:00.000Z"),
    new Date("2021-12-28T00:00:00.000Z"),
    new Date("2021-12-29T00:00:00.000Z"),
    new Date("2021-12-30T00:00:00.000Z"),
    new Date("2021-12-31T00:00:00.000Z"),
    undefined,
  ],
];
```
