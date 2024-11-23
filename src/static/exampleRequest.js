fetch("<baseUrl>/lyrics?artist=Henry+Moodie&track=Drunk+Text")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    });
