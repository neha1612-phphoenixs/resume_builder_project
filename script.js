let skills = [];

// UPDATE TEXT (FIXED)
function update() {
    document.getElementById("rname").innerText =
        document.getElementById("name").value || "Your Name";

    document.getElementById("remail").innerText =
        document.getElementById("email").value;

    document.getElementById("reducation").innerText =
        document.getElementById("education").value;

    document.getElementById("rprojects").innerText =
        document.getElementById("projects").value;
}

// PHOTO UPLOAD (FIXED)
function loadImage(event) {
    let file = event.target.files[0];

    if (file) {
        let imageURL = URL.createObjectURL(file);
        document.getElementById("rphoto").src = imageURL;
    }
}

// ADD SKILL
function addSkill() {
    let skill = document.getElementById("skillInput").value;

    if (!skill) return;

    let level = Math.floor(Math.random() * 100);

    skills.push({ name: skill, level: level });

    document.getElementById("skillInput").value = "";

    renderSkills();
}

// SHOW SKILLS
function renderSkills() {
    let container = document.getElementById("rskills");
    container.innerHTML = "";

    skills.forEach(s => {
        container.innerHTML += `
            <div>
                <p>${s.name}</p>
                <div class="skill-bar">
                    <div class="skill-fill" style="width:${s.level}%"></div>
                </div>
            </div>
        `;
    });
}

// PDF DOWNLOAD
function downloadPDF() {
    let element = document.getElementById("resume");
    html2pdf().from(element).save();
}