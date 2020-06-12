export function loadFile(file: string) {
    const decoder = new TextDecoder('utf-8'); 
    return decoder.decode(Deno.readFileSync(file));
}