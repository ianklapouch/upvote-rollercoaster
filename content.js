function scrollToTopAnswer() {
    const answerElements = document.querySelectorAll(".js-answer");
    let highestUpvotes = -1;
    let topAnswer = null;

    for (const answer of answerElements) {
        const upvotes = parseInt(answer.querySelector(".js-vote-count").innerText, 10);
        if (upvotes > highestUpvotes) {
            highestUpvotes = upvotes;
            topAnswer = answer;
        }
    }

    if (topAnswer) {
        topAnswer.scrollIntoView({ behavior: "smooth" });
    }
}

scrollToTopAnswer();
