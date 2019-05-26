const ctx: Worker = self as any;

import eratosfen from './';

ctx.addEventListener('message', ({ data }) => {
    ctx.postMessage(eratosfen(data));
});
