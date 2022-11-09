export default {
async hide(_, payload) {
    const hide = {
        id: payload.id,
    };
    const baseurl = payload.baseurl;

    const response = await fetch(baseurl + '/hide', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(hide),
    });

    const responseData = await response.json();

    if (!response.ok) {
        const error = new Error(
            responseData.message || 'Failed to send request.'
        );
        throw error;
    }
},
};