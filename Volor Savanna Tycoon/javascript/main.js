// renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// voxels
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: "red"});
const voxel = new THREE.Mesh(geometry, material);
scene.add(voxel);

camera.position.z = 5;

move_up = false;
move_down = false;
move_left = false;
move_right = false;

document.addEventListener("keydown", on_document_key_down, false);
function on_document_key_down(event)
{
    var keyCode = event.which;
    if (keyCode == 87)
    {
        move_down = true;
    }

    else if (keyCode == 83)
    {
        move_up = true;
    }
    
    else if (keyCode == 65)
    {
        move_left = true;
    }

    else if (keyCode == 68)
    {
        move_right = true;
    }
};

document.addEventListener("keyup", on_document_key_up, false);
function on_document_key_up(event)
{
    var keyCode = event.which;
    if (keyCode == 87)
    {
        move_down = false;
    }

    else if (keyCode == 83)
    {
        move_up = false;
    }
    
    else if (keyCode == 65)
    {
        move_left = false;
    }

    else if (keyCode == 68)
    {
        move_right = false;
    }
};

function animate()
{
    requestAnimationFrame(animate);

    if (move_up)
    {
        const new_vector = new THREE.Vector3(0, 1, 0)
        voxel.translateOnAxis(new_vector, -0.1);
    }

    if (move_down)
    {
        const new_vector = new THREE.Vector3(0, 1, 0)
        voxel.translateOnAxis(new_vector, 0.1);
    }

    if (move_left)
    {
        const new_vector = new THREE.Vector3(1, 0, 0)
        voxel.translateOnAxis(new_vector, -0.1);
    }

    if (move_right)
    {
        const new_vector = new THREE.Vector3(1, 0, 0)
        voxel.translateOnAxis(new_vector, 0.1);
    }

    renderer.render(scene, camera);
}

// Start the animation loop
animate();
