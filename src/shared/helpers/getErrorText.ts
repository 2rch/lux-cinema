export function getErrorText(e: Error): { title: string; detail: string }[] {
    const { name, message } = e;
    return [
        {
            title: name,
            detail: message,
        },
    ];
}